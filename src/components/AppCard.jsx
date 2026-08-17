import Icon from './Icon'

export default function AppCard({ app }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div className="app-card">
        <div className="app-card-accent" style={{ background: app.color }} />
        <div className="app-card-body">
          <div className="app-card-icon" style={{ background: app.color + '18', border: `1px solid ${app.color}30` }}>
            <Icon name={app.icon} size={22} color={app.color} />
          </div>
          <div className="app-card-meta">
            <span className="app-card-category" style={{ color: app.color }}>{app.category}</span>
            <h3 className="app-card-name">{app.name}</h3>
            <p className="app-card-desc">{app.description}</p>
          </div>
          <div className="app-card-launch">
            <span>Open</span>
            <Icon name="scan" size={14} color="#94A3B8" />
          </div>
        </div>
      </div>
    </a>
  )
}
