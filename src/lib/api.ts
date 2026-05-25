import { profile } from '../data/site'

const GAS_URL = import.meta.env.VITE_GAS_API_URL as string | undefined
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
const OWNER_EMAIL = profile.email

function hasGas() {
  return Boolean(GAS_URL && GAS_URL.length > 10)
}

function hasWeb3Forms() {
  return Boolean(WEB3FORMS_KEY && WEB3FORMS_KEY.length > 10)
}

/** Contact form can send via Web3Forms or Google Apps Script */
export function isContactConfigured() {
  return hasWeb3Forms() || hasGas()
}

/** CV request notification (email to you) */
export function isCvRequestConfigured() {
  return hasWeb3Forms() || hasGas()
}

/** One-click approve + visitor download link (Google Apps Script only) */
export function isCvApprovalConfigured() {
  return hasGas()
}

/** @deprecated use isContactConfigured */
export function isApiConfigured() {
  return isContactConfigured()
}

type ApiResult = {
  ok: boolean
  error?: string
  message?: string
  approved?: boolean
  valid?: boolean
  token?: string
  email?: string
  pending?: boolean
  rejected?: boolean
  notFound?: boolean
  alreadyApproved?: boolean
  viaMailto?: boolean
}

async function submitWeb3Forms(fields: Record<string, string>): Promise<ApiResult> {
  if (!hasWeb3Forms()) {
    return { ok: false, error: 'Web3Forms access key not set in .env' }
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        ...fields,
      }),
    })
    const data = (await res.json()) as { success?: boolean; message?: string }
    if (data.success) {
      return { ok: true, message: 'Sent successfully. Check your inbox shortly.' }
    }
    return { ok: false, error: data.message || 'Web3Forms rejected the request' }
  } catch {
    return { ok: false, error: 'Network error. Try again or email directly.' }
  }
}

async function callGasGet(
  action: string,
  params: Record<string, string>
): Promise<ApiResult> {
  if (!hasGas()) return { ok: false, error: 'Google Apps Script URL not configured' }
  const url = new URL(GAS_URL!)
  url.searchParams.set('action', action)
  Object.entries(params).forEach(([k, v]) => {
    if (v) url.searchParams.set(k, v)
  })
  const res = await fetch(url.toString(), { method: 'GET' })
  return res.json() as Promise<ApiResult>
}

async function callGasPost(
  action: string,
  body: Record<string, string>
): Promise<ApiResult> {
  if (!hasGas()) return { ok: false, error: 'Google Apps Script URL not configured' }
  const res = await fetch(GAS_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...body }),
  })
  return res.json() as Promise<ApiResult>
}

async function callGas(
  action: string,
  params: Record<string, string>
): Promise<ApiResult> {
  try {
    return await callGasPost(action, params)
  } catch {
    return await callGasGet(action, params)
  }
}

export async function requestCvDownload(email: string, name?: string) {
  if (hasGas()) {
    return callGas('cv_request', { email, name: name || '' })
  }
  if (hasWeb3Forms()) {
    return submitWeb3Forms({
      subject: `[Portfolio] CV download request`,
      email,
      from_name: name || email,
      message: `${name || 'A visitor'} (${email}) is requesting access to download your CV from your portfolio.\n\nReply to this email when you approve, or set up VITE_GAS_API_URL for one-click approval links (see docs/BACKEND-SETUP.md).`,
      botcheck: '',
    })
  }
  return openCvRequestMailto(email, name)
}

function openCvRequestMailto(email: string, name?: string): ApiResult {
  const subject = encodeURIComponent(`[Portfolio CV Request] ${email}`)
  const body = encodeURIComponent(
    `Hello,\n\nI would like to download your CV from your portfolio.\n\nMy email: ${email}\nName: ${name || '—'}\n\nThank you.`
  )
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`
  return {
    ok: true,
    viaMailto: true,
    message:
      'Your email app should open. Send the message to complete the request. You will receive the CV after approval.',
  }
}

export async function checkCvStatus(email: string) {
  if (!hasGas()) {
    return {
      ok: false,
      error:
        'Automatic approval check needs VITE_GAS_API_URL. If you already requested via email, wait for the approval reply.',
    }
  }
  return callGas('cv_check', { email })
}

export async function validateCvToken(token: string) {
  if (!hasGas()) return { ok: false, valid: false }
  return callGas('cv_validate', { token })
}

export async function sendContactMessage(payload: {
  email: string
  subject: string
  message: string
  name?: string
}) {
  if (hasGas()) {
    return callGas('contact', {
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      name: payload.name || '',
    })
  }
  if (hasWeb3Forms()) {
    return submitWeb3Forms({
      subject: `[Portfolio Contact] ${payload.subject}`,
      email: payload.email,
      from_name: payload.name || payload.email,
      message: payload.message,
      replyto: payload.email,
      botcheck: '',
    })
  }
  return openContactMailto(payload)
}

function openContactMailto(payload: {
  email: string
  subject: string
  message: string
  name?: string
}): ApiResult {
  const subj = encodeURIComponent(`[Portfolio] ${payload.subject}`)
  const body = encodeURIComponent(
    `From: ${payload.name || 'Visitor'}\nReply-To: ${payload.email}\n\n${payload.message}`
  )
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subj}&body=${body}`
  return {
    ok: true,
    viaMailto: true,
    message: 'Opening your email app to send the message.',
  }
}

const STORAGE_KEY = 'cv_access_grant'

export type CvGrant = {
  email: string
  token: string
  expires: number
}

export function saveCvGrant(grant: CvGrant) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grant))
}

export function getCvGrant(): CvGrant | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const g = JSON.parse(raw) as CvGrant
    if (g.expires < Date.now()) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return g
  } catch {
    return null
  }
}

export function clearCvGrant() {
  localStorage.removeItem(STORAGE_KEY)
}

export function hasValidCvAccess(): boolean {
  return getCvGrant() !== null
}

export function getEmailBackendStatus() {
  return {
    web3forms: hasWeb3Forms(),
    gas: hasGas(),
    contact: isContactConfigured(),
    cvRequest: isCvRequestConfigured(),
    cvApproval: isCvApprovalConfigured(),
  }
}
