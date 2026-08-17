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
    id: 'scanner',
    name: 'SGS Scanner',
    description: 'Barcode & QR scanning for inventory and shipments',
    url: import.meta.env.VITE_APP_SCANNER_URL || '#',
    color: '#3B82F6',
    icon: 'scan',
    isMain: true,
  },
  {
    id: 'prowler',
    name: 'Prowler Security',
    description: 'Cloud security posture & compliance monitoring',
    url: import.meta.env.VITE_APP_PROWLER_URL || '#',
    color: '#EF4444',
    icon: 'shield',
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
