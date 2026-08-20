export const APPS = [

  // ── MAIN APPLICATIONS ──────────────────────────────────────

  {
    id: 'ops', name: 'SGS Analytics', description: 'Analytics Dashboard',
    url: import.meta.env.VITE_OPS_URL || 'https://ops.stellarglobalsupplies.com',
    color: '#3B82F6', icon: 'chart', isMain: true,
  },
  {
    id: 'quote', name: 'SGS Quotes', description: 'SGS Native Quotation Generator',
    url: import.meta.env.VITE_QUOTE_URL || 'https://quote.stellarglobalsupplies.com',
    color: '#10B981', icon: 'file-text', isMain: true,
  },
  {
    id: 'workflow', name: 'SGS Workflows', description: 'Lead generation, blog publishing and social media automation',
    url: import.meta.env.VITE_WORKFLOW_URL || 'https://workflow.stellarglobalsupplies.com',
    color: '#8B5CF6', icon: 'workflow', isMain: true,
  },
  {
    id: 'advertise', name: 'SGS Advertise', description: 'SGS Native Advertising Campaign Platform',
    url: import.meta.env.VITE_ADVERTISE_URL || 'https://advertise.stellarglobalsupplies.com',
    color: '#F59E0B', icon: 'megaphone', isMain: true,
  },
  {
    id: 'orders', name: 'SGS Orders', description: 'SGS Native Order Management and Tracking Platform',
    url: import.meta.env.VITE_ORDERS_URL || 'https://orders.stellarglobalsupplies.com',
    color: '#06B6D4', icon: 'truck', isMain: true,
  },
  {
    id: 'stellarai', name: 'Stellar AI', description: 'SGS Native AI Assistant powered by LLaMA',
    url: import.meta.env.VITE_STELLARAI_URL || 'https://ai.stellarglobalsupplies.com',
    color: '#A855F7', icon: 'brain', isMain: true,
  },

  // ── SUPPORTING TOOLS ───────────────────────────────────────

  {
    id: 'docs', name: 'SGS Docs', description: 'Internal Documentation synced from GitHub',
    url: import.meta.env.VITE_DOCS_URL || 'https://docs.stellarglobalsupplies.com',
    color: '#64748B', icon: 'book', isMain: false,
  },
  {
    id: 'scan', name: 'SGS Scan', description: 'Vulnerability Scanning and Code Quality Control',
    url: import.meta.env.VITE_SCAN_URL || 'https://scan.stellarglobalsupplies.com',
    color: '#EF4444', icon: 'scan', isMain: false,
  },
  {
    id: 'security', name: 'SGS Security', description: 'Security Tracking and Scanning Platform',
    url: import.meta.env.VITE_SECURITY_URL || 'https://security.stellarglobalsupplies.com',
    color: '#DC2626', icon: 'shield', isMain: false,
  },
  {
    id: 'testing', name: 'SGS Testing', description: 'SGS Native Testing Platform',
    url: import.meta.env.VITE_TESTING_URL || 'https://tests.stellarglobalsupplies.com',
    color: '#EC4899', icon: 'flask', isMain: false,
  },

  // ── THIRD-PARTY TOOLS ──────────────────────────────────────
  // isExternal: true → opens directly, no SSO token passed

  {
    id: 'github', name: 'GitHub', description: 'Source code repositories and version control',
    url: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Stellar-Global-Supplies',
    color: '#24292F', icon: 'github', isMain: false, isExternal: true,
  },
  {
    id: 'cloudflare', name: 'Cloudflare', description: 'DNS, CDN, Workers and Pages management',
    url: import.meta.env.VITE_CF_URL || 'https://dash.cloudflare.com',
    color: '#F6821F', icon: 'cloud', isMain: false, isExternal: true,
  },
  {
    id: 'newrelic', name: 'New Relic', description: 'Application performance monitoring and observability',
    url: import.meta.env.VITE_NEWRELIC_URL || 'https://one.newrelic.com',
    color: '#008C99', icon: 'activity', isMain: false, isExternal: true,
  },
  {
    id: 'devhelm', name: 'DevHelm', description: 'DevHelm infrastructure and deployment tools',
    url: import.meta.env.VITE_DEVHELM_URL || 'https://devhelm.io',
    color: '#6366F1', icon: 'terminal', isMain: false, isExternal: true,
  },
  {
    id: 'snyk', name: 'Snyk', description: 'Developer security platform for vulnerability detection',
    url: import.meta.env.VITE_SNYK_URL || 'https://app.snyk.io',
    color: '#4C4A73', icon: 'snyk', isMain: false, isExternal: true,
  },
  {
    id: 'sonarcloud', name: 'SonarCloud', description: 'Cloud-based code quality and security analysis',
    url: import.meta.env.VITE_SONARCLOUD_URL || 'https://sonarcloud.io',
    color: '#F3702A', icon: 'sonar', isMain: false, isExternal: true,
  },
]

export const MAIN_APPS       = APPS.filter(a => a.isMain && !a.isExternal)
export const SUPPORTING_APPS = APPS.filter(a => !a.isMain && !a.isExternal)
export const EXTERNAL_APPS   = APPS.filter(a => a.isExternal)
// append to APPS array — add before the closing ]
