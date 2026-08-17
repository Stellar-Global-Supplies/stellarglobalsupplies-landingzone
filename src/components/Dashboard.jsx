import { useState } from 'react'
import Sidebar from './Sidebar'
import AppCard from './AppCard'
import { APPS } from '../config/apps'
import { sdk } from '../config/casdoor'

export default function Dashboard({ user }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = APPS.filter(app => {
    const matchCat = activeCategory === 'all' || app.category === activeCategory
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase()) ||
                        app.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const handleLogout = () => {
    sdk.clearState()
    window.location.href = '/'
  }

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const firstName = (user?.name || user?.preferred_username || 'there').split(' ')[0]

  return (
    <div className="layout">
      <Sidebar
        user={user}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
        onLogout={handleLogout}
      />

      <main className="main">
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-greeting">
            <h1>{greeting}, {firstName}</h1>
            <p>You have access to {APPS.length} applications</p>
          </div>
          <div className="search-wrap">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className="search-input"
              placeholder="Search apps…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* Stats bar */}
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-value">{APPS.length}</span>
            <span className="stat-label">Total Apps</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-value">{[...new Set(APPS.map(a => a.category))].length}</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-value online">●</span>
            <span className="stat-label">All Systems Operational</span>
          </div>
        </div>

        {/* Category heading */}
        <div className="section-header">
          <h2>{activeCategory === 'all' ? 'All Applications' : activeCategory}</h2>
          <span className="section-count">{filtered.length} app{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {/* App grid */}
        {filtered.length > 0 ? (
          <div className="app-grid">
            {filtered.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        ) : (
          <div className="empty">
            <p>No apps match your search.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('all') }}>Clear filters</button>
          </div>
        )}
      </main>
    </div>
  )
}
