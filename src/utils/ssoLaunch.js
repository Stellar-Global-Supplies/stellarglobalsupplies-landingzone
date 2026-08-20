const LANDING_URL = import.meta.env.VITE_LANDING_URL || window.location.origin

/**
 * Launch an app tile.
 * - External (isExternal: true) → open directly, no SSO token
 * - Internal SGS apps           → pass Casdoor JWT via /sso-callback
 */
export function launchApp(app) {
  if (!app.url || app.url === '#') return

  // ✅ Third-party tools open directly — never pass the SSO token
  if (app.isExternal) {
    window.open(app.url, '_blank', 'noopener,noreferrer')
    return
  }

  const token = localStorage.getItem('casdoor_token')

  if (!token) {
    window.open(app.url, '_blank', 'noopener,noreferrer')
    return
  }

  const callbackUrl = new URL('/sso-callback', app.url)
  callbackUrl.searchParams.set('token', token)
  callbackUrl.searchParams.set('redirect', '/')
  callbackUrl.searchParams.set('ts', Date.now())

  window.open(callbackUrl.toString(), '_blank', 'noopener,noreferrer')
}

export function buildLoginRedirectUrl(callbackAppUrl) {
  const url = new URL('/login', LANDING_URL)
  url.searchParams.set('callback', callbackAppUrl)
  return url.toString()
}
