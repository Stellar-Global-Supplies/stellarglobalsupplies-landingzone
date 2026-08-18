// ─────────────────────────────────────────────────────────────
// STELLAR GLOBAL SUPPLIES — APP DIRECTORY
//
// isMain: true  → displayed in "Main Applications" (large tiles)
// isMain: false → displayed in "Supporting Tools" (smaller tiles)
//
// icon: any name from src/components/Icon.jsx
// color: accent color used for icon bg + border
// ─────────────────────────────────────────────────────────────

export const APPS = [
  // ── MAIN APPLICATIONS ──────────────────────────────────────
  {
    id: 'ops',
    name: 'SGS Analytics',
    description: 'Analytics Dashboard',
    url: import.meta.env.VITE_OPS_URL || 'https://ops.stellarglobalsupplies.com',
    color: '#3B82F6',
    icon: 'box',
    isMain: true,
  },
  {
    id: 'quote',
    name: 'SGS Quote Generator',
    description: 'SGS Native Quotation Generator',
    url: import.meta.env.VITE_OPS_URL || 'https://quote.stellarglobalsupplies.com',
    color: '#3B82F6',
    icon: 'box',
    isMain: true,
  },
  // ── SUPPORTING TOOLS ───────────────────────────────────────
  // Add more apps here:
  // {
  //   id: 'your-app-id',
  //   name: 'App Name',
  //   description: 'One sentence description',
  //   url: import.meta.env.VITE_APP_YOUR_APP_URL || '#',
  //   color: '#10B981',
  //   icon: 'box',
  //   isMain: false,
  // },
]

export const MAIN_APPS      = APPS.filter(a => a.isMain)
export const SUPPORTING_APPS = APPS.filter(a => !a.isMain)
