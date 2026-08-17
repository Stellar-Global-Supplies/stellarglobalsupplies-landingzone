import { CATEGORIES, APPS } from '../config/apps'

export default function Sidebar({ user, activeCategory, onCategory, onLogout }) {
  const initials = user
    ? (user.name || user.preferred_username || user.email || 'U')
        .split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : 'U'

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">SGS</div>
        <div className="logo-text">
          <span className="logo-primary">Stellar Global</span>
          <span className="logo-secondary">Supplies</span>
        </div>
      </div>

      {/* User profile */}
      <div className="sidebar-profile">
        <div className="profile-avatar">{initials}</div>
        <div className="profile-info">
          <span className="profile-name">{user?.name || user?.preferred_username || 'User'}</span>
          <span className="profile-email">{user?.email || ''}</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      {/* Nav */}
      <nav className="sidebar-nav">
        <span className="nav-label">Filter by</span>
        <button
          className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => onCategory('all')}
        >
          All Apps
          <span className="nav-count">{APPS.length}</span>
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`nav-item ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategory(cat)}
          >
            {cat}
            <span className="nav-count">{APPS.filter(a => a.category === cat).length}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-spacer" />

      {/* Logout */}
      <button className="sidebar-logout" onClick={onLogout}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
        Sign out
      </button>
    </aside>
  )
}
