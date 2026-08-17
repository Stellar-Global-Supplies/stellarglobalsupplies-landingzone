import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sdk } from '../config/casdoor'

export default function Callback() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const state = params.get('state')

    if (!code) {
      navigate('/')
      return
    }

    sdk.exchangeForAccessToken(code, state)
      .then(token => {
        if (token?.access_token) {
          localStorage.setItem('casdoor_token', token.access_token)
          navigate('/')
        } else {
          console.error('No access token received')
          navigate('/')
        }
      })
      .catch(err => {
        console.error('Auth callback error:', err)
        navigate('/')
      })
  }, [navigate])

  return (
    <div className="loading-screen">
      <div className="spinner" />
      <p>Signing you in…</p>
    </div>
  )
}
