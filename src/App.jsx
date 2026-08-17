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
    if (!token) {
      setLoading(false)
      return
    }

    // Decode JWT to get user info (no extra API call needed)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      setUser(payload)
    } catch (e) {
      // Token invalid — clear it
      localStorage.removeItem('casdoor_token')
    }
    setLoading(false)
  }, [])

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
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
