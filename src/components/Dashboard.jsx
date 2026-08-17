import { useState } from 'react'
import AppCard from './AppCard'
import { MAIN_APPS, SUPPORTING_APPS, APPS } from '../config/apps'

export default function Dashboard({ user, onLogout }) {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const q = search.toLowerCase()
  const filter = apps => apps.filter(a =>
    a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
  )

  const mainFiltered       = filter(MAIN_APPS)
  const supportingFiltered = filter(SUPPORTING_APPS)
  const hasResults         = mainFiltered.length + supportingFiltered.length > 0

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const firstName = (user?.name || user?.preferred_username || 'there').split(' ')[0]
  const initials = (user?.name || user?.preferred_username || 'U')
    .split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="dashboard">
      {/* ── Top nav ── */}
      <header className="nav">
        <div className="nav__brand">
          <div className="nav__logo">SGS</div>
          <div className="nav__title">
            <span className="nav__primary">Stellar Global</span>
            <span className="nav__secondary">Supplies</span>
          </div>
        </div>

        {/* Search — hidden on very small screens, shown via toggle */}
        <div className="nav__search-wrap">
          <svg className="nav__search-icon" width="15" height="15" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            className="nav__search"
            placeholder="Search apps…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* User menu */}
        <div className="nav__user">
          <button
            className="nav__avatar"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="User menu"
          >
            {initials}
          </button>
          {menuOpen && (
            <div className="nav__dropdown">
              <div className="nav__dropdown-info">
                <span className="nav__dropdown-name">{user?.name || user?.preferred_username}</span>
                <span className="nav__dropdown-email">{user?.email || ''}</span>
              </div>
              <div className="nav__dropdown-divider" />
              <button
                className="nav__dropdown-signout"
                onClick={() => { setMenuOpen(false); onLogout() }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                </svg>
                Sign out
              </button>
            </div>
          )}
          {/* Backdrop to close dropdown */}
          {menuOpen && <div className="nav__backdrop" onClick={() => setMenuOpen(false)} />}
        </div>
      </header>

      {/* ── Hero greeting ── */}
      <section className="hero">
        <p className="hero__greeting">{greeting}, {firstName}</p>
        <p className="hero__sub">
          {APPS.length} application{APPS.length !== 1 ? 's' : ''} available
        </p>
      </section>

      {/* ── Mobile search ── */}
      <div className="mobile-search-wrap">
        <svg className="nav__search-icon" width="15" height="15" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          className="nav__search"
          placeholder="Search apps…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* ── App sections ── */}
      <div className="sections">
        {!hasResults ? (
          <div className="empty">
            <p>No apps match "{search}"</p>
            <button onClick={() => setSearch('')}>Clear search</button>
          </div>
        ) : (
          <>
            {mainFiltered.length > 0 && (
              <section className="app-section">
                <h2 className="section-label">Main Applications</h2>
                <div className="tile-grid tile-grid--lg">
                  {mainFiltered.map(app =>
                    <AppCard key={app.id} app={app} size="lg" />
                  )}
                </div>
              </section>
            )}

            {supportingFiltered.length > 0 && (
              <section className="app-section">
                <h2 className="section-label">Supporting Tools</h2>
                <div className="tile-grid tile-grid--sm">
                  {supportingFiltered.map(app =>
                    <AppCard key={app.id} app={app} size="sm" />
                  )}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}
