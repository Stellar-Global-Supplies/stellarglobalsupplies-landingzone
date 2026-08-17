import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sdk } from '../config/casdoor'
import { launchApp } from '../utils/ssoLaunch'

export default function Callback() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code   = params.get('code')
    const state  = params.get('state')

    if (!code) { navigate('/'); return }

    sdk.exchangeForAccessToken(code, state)
      .then(token => {
        if (token?.access_token) {
          localStorage.setItem('casdoor_token', token.access_token)

          // If we came here because an app redirected unauthenticated user:
          const pendingCallback = sessionStorage.getItem('sso_callback_app')
          if (pendingCallback) {
            sessionStorage.removeItem('sso_callback_app')
            // Build SSO launch URL to the pending app
            const callbackUrl = new URL('/sso-callback', pendingCallback)
            callbackUrl.searchParams.set('token', token.access_token)
            callbackUrl.searchParams.set('redirect', '/')
            callbackUrl.searchParams.set('ts', Date.now())
            window.location.href = callbackUrl.toString()
            return
          }

          navigate('/')
        } else {
          console.error('No access token received')
          navigate('/login')
        }
      })
      .catch(err => {
        console.error('Auth callback error:', err)
        navigate('/login')
      })
  }, [navigate])

  return (
    <div className="loading-screen">
      <div className="spinner" />
      <p>Signing you in…</p>
    </div>
  )
}
