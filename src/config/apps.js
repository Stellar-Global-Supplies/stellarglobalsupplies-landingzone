// ─────────────────────────────────────────────
// STELLAR GLOBAL SUPPLIES — APP DIRECTORY
// Add / edit / remove apps here.
// color: accent color for the card top border
// ─────────────────────────────────────────────

export const APPS = [
  {
    id: 'scanner',
    name: 'SGS Scanner',
    description: 'Barcode and QR scanning for inventory and shipment tracking.',
    url: import.meta.env.VITE_APP_SCANNER_URL || '#',
    color: '#3B82F6',   // blue
    category: 'Operations',
    icon: 'scan',
  },
  {
    id: 'prowler',
    name: 'Prowler Security',
    description: 'Cloud security posture and compliance monitoring dashboard.',
    url: import.meta.env.VITE_APP_PROWLER_URL || '#',
    color: '#EF4444',   // red
    category: 'Security',
    icon: 'shield',
  },
  // ── Add more apps below ──
  // {
  //   id: 'your-app-id',
  //   name: 'App Name',
  //   description: 'What this app does in one sentence.',
  //   url: import.meta.env.VITE_APP_YOUR_APP_URL || '#',
  //   color: '#10B981',
  //   category: 'Category',
  //   icon: 'box',
  // },
]

export const CATEGORIES = [...new Set(APPS.map(a => a.category))]
