import Icon from './Icon'
import { launchApp } from '../utils/ssoLaunch'

/**
 * Square icon tile — like an OS app launcher.
 * size: 'lg' (main apps) | 'sm' (supporting apps)
 */
export default function AppCard({ app, size = 'sm' }) {
  return (
    <button
      className={`app-tile app-tile--${size}`}
      onClick={() => launchApp(app)}
      title={app.description}
      disabled={app.url === '#'}
    >
      <div
        className="app-tile__icon"
        style={{
          background: `${app.color}18`,
          border: `1.5px solid ${app.color}35`,
        }}
      >
        <Icon name={app.icon} size={size === 'lg' ? 28 : 22} color={app.color} />
      </div>
      <span className="app-tile__name">{app.name}</span>
      {app.url === '#' && <span className="app-tile__badge">Soon</span>}
    </button>
  )
}

