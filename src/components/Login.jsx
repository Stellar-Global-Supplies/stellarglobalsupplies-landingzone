import { sdk } from '../config/casdoor'

export default function Login() {
  const handleLogin = () => {
    sdk.signin_redirect()
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-mark large">SGS</div>
        </div>
        <h1 className="login-title">Stellar Global Supplies</h1>
        <p className="login-sub">Sign in to access your apps</p>
        <button className="login-btn" onClick={handleLogin}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H3" />
          </svg>
          Sign in with SSO
        </button>
        <p className="login-footer">Powered by Stellar SSO</p>
      </div>
    </div>
  )
}
