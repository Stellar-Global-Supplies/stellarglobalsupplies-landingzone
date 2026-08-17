// ─────────────────────────────────────────────────────────────
// SSO Launch Utility
//
// When user clicks an app, we pass the Casdoor JWT to the app
// via the /sso-callback route. The app validates the JWT and
// creates its own session (Supabase or other).
//
// DIRECT ACCESS PROTECTION:
// Apps should redirect unauthenticated users to:
//   https://portal.stellarglobalsupplies.com/login?callback=<encodedAppURL>
// The landing page then redirects back after auth.
// ─────────────────────────────────────────────────────────────

const LANDING_URL = import.meta.env.VITE_LANDING_URL || window.location.origin

/**
 * Open an app with the SSO token embedded.
 * If the app URL is '#' (not configured), does nothing.
 */
export function launchApp(app) {
  if (!app.url || app.url === '#') return

  const token = localStorage.getItem('casdoor_token')

  // No token? Shouldn't happen (protected route), but guard anyway
  if (!token) {
    window.open(app.url, '_blank', 'noopener,noreferrer')
    return
  }

  // Build the SSO callback URL for the target app
  const callbackUrl = new URL('/sso-callback', app.url)
  callbackUrl.searchParams.set('token', token)
  callbackUrl.searchParams.set('redirect', '/')
  // Add a short-lived nonce-like ts so the app can reject replayed URLs
  callbackUrl.searchParams.set('ts', Date.now())

  window.open(callbackUrl.toString(), '_blank', 'noopener,noreferrer')
}

/**
 * Build the URL that unauthenticated apps redirect to.
 * Used by the supabase-sso-adapter on the app side.
 *
 * Example: /login?callback=https%3A%2F%2Fscanner.example.com%2Fdashboard
 */
export function buildLoginRedirectUrl(callbackAppUrl) {
  const url = new URL('/login', LANDING_URL)
  url.searchParams.set('callback', callbackAppUrl)
  return url.toString()
}
