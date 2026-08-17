import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { sdk } from './config/casdoor'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Callback from './components/Callback'
import './styles.css'

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('casdoor_token')
  if (!token) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('casdoor_token')
    if (!token) { setLoading(false); return }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      // Check token expiry
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('casdoor_token')
        setLoading(false)
        return
      }
      setUser(payload)
    } catch {
      localStorage.removeItem('casdoor_token')
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    // ✅ Fixed: actually clear the token + Casdoor state
    localStorage.removeItem('casdoor_token')
    try { sdk.clearState() } catch {}
    window.location.replace('/login')
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

