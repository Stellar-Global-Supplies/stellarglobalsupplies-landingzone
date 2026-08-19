// ─────────────────────────────────────────────────────────────
// STELLAR GLOBAL SUPPLIES — APP DIRECTORY
//
// isMain: true  → displayed in "Main Applications" (large tiles)
// isMain: false → displayed in "Supporting Tools" (smaller tiles)
//
// icon: name from src/components/Icon.jsx
// color: accent color used for icon bg + border
// ─────────────────────────────────────────────────────────────

export const APPS = [
  // ── MAIN APPLICATIONS ──────────────────────────────────────

  {
    id: 'ops',
    name: 'SGS Analytics',
    description: 'Analytics Dashboard',
    url:
      import.meta.env.VITE_OPS_URL ||
      'https://ops.stellarglobalsupplies.com',
    color: '#3B82F6',
    icon: 'chart',
    isMain: true,
  },

  {
    id: 'quote',
    name: 'SGS Quote Generator',
    description: 'SGS Native Quotation Generator',
    url:
      import.meta.env.VITE_QUOTE_URL ||
      'https://quote.stellarglobalsupplies.com',
    color: '#10B981',
    icon: 'file-text',
    isMain: true,
  },

  {
    id: 'workflow',
    name: 'SGS Workflows',
    description:
      'SGS Native Workflow platform for lead generation, technology jobs, blog publishing, and social media automation',
    url:
      import.meta.env.VITE_WORKFLOW_URL ||
      'https://workflow.stellarglobalsupplies.com',
    color: '#8B5CF6',
    icon: 'workflow',
    isMain: true,
  },

  {
    id: 'advertise',
    name: 'SGS Advertise',
    description: 'SGS Native Advertising Campaign Platform',
    url:
      import.meta.env.VITE_ADVERTISE_URL ||
      'https://advertise.stellarglobalsupplies.com',
    color: '#F59E0B',
    icon: 'megaphone',
    isMain: true,
  },

  {
    id: 'orders',
    name: 'SGS Order Management System',
    description:
      'SGS Native Order Management and Tracking Platform',
    url:
      import.meta.env.VITE_ORDERS_URL ||
      'https://orders.stellarglobalsupplies.com',
    color: '#06B6D4',
    icon: 'truck',
    isMain: true,
  },

  // ── SUPPORTING TOOLS ───────────────────────────────────────

  {
    id: 'scan',
    name: 'SGS Scan',
    description:
      'SGS Native Vulnerability Scanning and Code Quality Control Platform',
    url:
      import.meta.env.VITE_SCAN_URL ||
      'https://scan.stellarglobalsupplies.com',
    color: '#EF4444',
    icon: 'scan',
    isMain: false,
  },

  {
    id: 'security',
    name: 'SGS Security',
    description:
      'SGS Native Security Tracking and Scanning Platform',
    url:
      import.meta.env.VITE_SECURITY_URL ||
      'https://security.stellarglobalsupplies.com',
    color: '#DC2626',
    icon: 'shield',
    isMain: false,
  },

  {
    id: 'testing',
    name: 'SGS Testing',
    description: 'SGS Native Testing Platform',
    url:
      import.meta.env.VITE_TESTING_URL ||
      'https://tests.stellarglobalsupplies.com',
    color: '#EC4899',
    icon: 'flask',
    isMain: false,
  },
]

// ─────────────────────────────────────────────────────────────
// FILTERED APP GROUPS
// ─────────────────────────────────────────────────────────────

export const MAIN_APPS = APPS.filter((app) => app.isMain)

export const SUPPORTING_APPS = APPS.filter((app) => !app.isMain)