import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { applyCvTokenFromUrl } from '../components/CvDownloadModal'

export function useCvTokenFromUrl() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('cv_token')
    if (!token) return

    applyCvTokenFromUrl(token).then((ok) => {
      if (ok) {
        searchParams.delete('cv_token')
        setSearchParams(searchParams, { replace: true })
        window.dispatchEvent(new CustomEvent('cv-access-granted'))
      }
    })
  }, [searchParams, setSearchParams])
}
