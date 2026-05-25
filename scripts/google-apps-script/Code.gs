/**
 * Portfolio backend — deploy as Web App (Execute as: Me, Who has access: Anyone)
 * Set Script Properties: OWNER_EMAIL, SITE_URL, ADMIN_SECRET (optional)
 */
var SHEET_NAME = 'CVRequests';

function getProps() {
  var p = PropertiesService.getScriptProperties();
  return {
    ownerEmail: p.getProperty('OWNER_EMAIL') || 'raees.info07@gmail.com',
    siteUrl: p.getProperty('SITE_URL') || 'https://roboraees07.github.io/Portfolio-Website/',
    adminSecret: p.getProperty('ADMIN_SECRET') || 'change-me-in-script-properties',
  };
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'email', 'status', 'token', 'created', 'name']);
  }
  return sheet;
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet(e) {
  var action = (e.parameter.action || '').toString();
  var props = getProps();

  try {
    if (action === 'approve') {
      return handleApprove(e.parameter.id, props);
    }
    if (action === 'reject') {
      return handleReject(e.parameter.id, props);
    }
    if (action === 'cv_check') {
      return jsonOut(checkCvAccess(e.parameter.email));
    }
    if (action === 'cv_validate') {
      return jsonOut(validateToken(e.parameter.token));
    }
    if (action === 'cv_request') {
      return jsonOut(
        requestCv(e.parameter.email, e.parameter.name || '')
      );
    }
    if (action === 'contact') {
      return jsonOut(
        sendContact(
          e.parameter.email,
          e.parameter.subject,
          e.parameter.message,
          e.parameter.name || ''
        )
      );
    }
    return jsonOut({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOut({ ok: false, error: 'Invalid JSON' });
  }
  var action = data.action;
  try {
    if (action === 'cv_request') {
      return jsonOut(requestCv(data.email, data.name || ''));
    }
    if (action === 'cv_check') {
      return jsonOut(checkCvAccess(data.email));
    }
    if (action === 'cv_validate') {
      return jsonOut(validateToken(data.token));
    }
    if (action === 'contact') {
      return jsonOut(
        sendContact(data.email, data.subject, data.message, data.name || '')
      );
    }
    return jsonOut({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function requestCv(email, name) {
  email = normalizeEmail(email);
  if (!email) return { ok: false, error: 'Valid email required' };

  var sheet = getSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (
      normalizeEmail(data[i][1]) === email &&
      data[i][2] === 'approved' &&
      data[i][3]
    ) {
      return {
        ok: true,
        alreadyApproved: true,
        message: 'You already have access. Check your email or use Check Status.',
      };
    }
    if (normalizeEmail(data[i][1]) === email && data[i][2] === 'pending') {
      return {
        ok: true,
        pending: true,
        message: 'Request already pending. You will be notified after approval.',
      };
    }
  }

  var id = Utilities.getUuid();
  var token = Utilities.getUuid();
  sheet.appendRow([id, email, 'pending', token, new Date(), name]);
  var props = getProps();
  var scriptUrl = ScriptApp.getService().getUrl();
  var approveUrl =
    scriptUrl + '?action=approve&id=' + encodeURIComponent(id);
  var rejectUrl =
    scriptUrl + '?action=reject&id=' + encodeURIComponent(id);

  MailApp.sendEmail({
    to: props.ownerEmail,
    subject: '[Portfolio] CV download request from ' + email,
    htmlBody:
      '<p><strong>' +
      (name || 'Someone') +
      '</strong> (' +
      email +
      ') wants to download your CV.</p>' +
      '<p><a href="' +
      approveUrl +
      '">Approve</a> &nbsp;|&nbsp; <a href="' +
      rejectUrl +
      '">Reject</a></p>' +
      '<p>Request ID: ' +
      id +
      '</p>',
  });

  MailApp.sendEmail({
    to: email,
    subject: 'CV request received — Engr.M. Raees Azam',
    htmlBody:
      '<p>Your request to download the CV was sent to Engr.M. Raees Azam.</p>' +
      '<p>You will receive another email once your request is <strong>approved</strong>.</p>',
  });

  return {
    ok: true,
    message:
      'Verification email sent. You will be able to download after approval.',
  };
}

function handleApprove(id, props) {
  var row = findRowById(id);
  if (!row) {
    return htmlPage('Request not found', 'Invalid or expired request ID.');
  }
  var sheet = getSheet();
  var email = row.email;
  var token = row.token;
  sheet.getRange(row.index, 3).setValue('approved');

  var downloadLink =
    props.siteUrl.replace(/\/$/, '') +
    '/?cv_token=' +
    encodeURIComponent(token);

  MailApp.sendEmail({
    to: email,
    subject: 'Your CV download was approved — Engr.M. Raees Azam',
    htmlBody:
      '<p>Your request was <strong>approved</strong>.</p>' +
      '<p><a href="' +
      downloadLink +
      '">Download CV here</a></p>' +
      '<p>Or return to the portfolio, enter your email, and click <strong>Check approval status</strong>.</p>',
  });

  return htmlPage(
    'Approved',
    'Approved for <strong>' +
      email +
      '</strong>. They were emailed a download link.'
  );
}

function handleReject(id, props) {
  var row = findRowById(id);
  if (!row) {
    return htmlPage('Not found', 'Invalid request ID.');
  }
  getSheet().getRange(row.index, 3).setValue('rejected');
  MailApp.sendEmail({
    to: row.email,
    subject: 'CV download request — Engr.M. Raees Azam',
    htmlBody:
      '<p>Your request to download the CV was not approved at this time.</p>' +
      '<p>You may contact <a href="mailto:' +
      props.ownerEmail +
      '">' +
      props.ownerEmail +
      '</a> directly.</p>',
  });
  return htmlPage('Rejected', 'Request rejected. User was notified.');
}

function checkCvAccess(email) {
  email = normalizeEmail(email);
  if (!email) return { ok: false, error: 'Valid email required' };
  var sheet = getSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {
    if (normalizeEmail(data[i][1]) === email && data[i][2] === 'approved') {
      return { ok: true, approved: true, token: data[i][3] };
    }
    if (normalizeEmail(data[i][1]) === email && data[i][2] === 'pending') {
      return { ok: true, approved: false, pending: true };
    }
    if (normalizeEmail(data[i][1]) === email && data[i][2] === 'rejected') {
      return { ok: true, approved: false, rejected: true };
    }
  }
  return { ok: true, approved: false, notFound: true };
}

function validateToken(token) {
  if (!token) return { ok: false, valid: false };
  var sheet = getSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][3] === token && data[i][2] === 'approved') {
      return { ok: true, valid: true, email: data[i][1] };
    }
  }
  return { ok: true, valid: false };
}

function sendContact(email, subject, message, name) {
  email = normalizeEmail(email);
  if (!email || !subject || !message) {
    return { ok: false, error: 'Email, subject, and message are required' };
  }
  var props = getProps();
  MailApp.sendEmail({
    to: props.ownerEmail,
    replyTo: email,
    subject: '[Portfolio Contact] ' + subject,
    htmlBody:
      '<p><strong>From:</strong> ' +
      (name || 'Visitor') +
      ' &lt;' +
      email +
      '&gt;</p>' +
      '<p><strong>Subject:</strong> ' +
      escapeHtml(subject) +
      '</p>' +
      '<hr><p>' +
      escapeHtml(message).replace(/\n/g, '<br>') +
      '</p>',
  });
  MailApp.sendEmail({
    to: email,
    subject: 'Message received — Engr.M. Raees Azam',
    htmlBody:
      '<p>Thank you for reaching out. Your message was delivered and will be reviewed soon.</p>',
  });
  return { ok: true, message: 'Message sent successfully.' };
}

function findRowById(id) {
  var sheet = getSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      return {
        index: i + 1,
        email: data[i][1],
        status: data[i][2],
        token: data[i][3],
      };
    }
  }
  return null;
}

function normalizeEmail(email) {
  return (email || '').toString().trim().toLowerCase();
}

function escapeHtml(s) {
  return (s || '')
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function htmlPage(title, body) {
  return HtmlService.createHtmlOutput(
    '<!DOCTYPE html><html><body style="font-family:sans-serif;padding:2rem">' +
      '<h1>' +
      title +
      '</h1><p>' +
      body +
      '</p></body></html>'
  );
}
