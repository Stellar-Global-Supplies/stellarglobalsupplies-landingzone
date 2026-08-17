# Stellar Portal

App launcher for Stellar Global Supplies — `apps.stellarglobalsupplies.com`  
Stack: **React + Vite** · **Casdoor OIDC** · **Cloudflare Pages** (free)

---

## What This Is

A single sign-on portal where team members log in once and access all internal apps from one page.

```
apps.stellarglobalsupplies.com
  → Login via Casdoor SSO
  → Dashboard showing all apps as cards
  → Click any app → opens in new tab (already authenticated)
```

---

## File Structure

```
stellar-portal/
├── src/
│   ├── config/
│   │   ├── casdoor.js     # Casdoor SDK setup — reads from env vars
│   │   └── apps.js        # ← EDIT THIS to add/remove/update apps
│   ├── components/
│   │   ├── Dashboard.jsx  # Main dashboard with search + grid
│   │   ├── Sidebar.jsx    # Nav, user profile, logout
│   │   ├── AppCard.jsx    # Individual app card
│   │   ├── Login.jsx      # Login page (redirects to Casdoor)
│   │   ├── Callback.jsx   # Handles OAuth redirect back from Casdoor
│   │   └── Icon.jsx       # SVG icon set
│   ├── App.jsx            # Routing + auth guard
│   ├── main.jsx           # React entry point
│   └── styles.css         # All styles
├── index.html
├── vite.config.js
├── package.json
├── .env.example           # Copy to .env for local dev
├── .gitignore
└── README.md
```

---

## Setup

### Step 1 — Register portal in Casdoor

1. Open your Casdoor dashboard (`sso.stellarglobalsupplies.com`)
2. Go to **Applications → Add**
3. Fill in:
   ```
   Name:         stellar-portal
   Organization: stellar-global
   Homepage:     https://apps.stellarglobalsupplies.com
   Redirect URL: https://apps.stellarglobalsupplies.com/callback
   Grant type:   Authorization Code
   ```
4. Save → copy the **Client ID**

### Step 2 — Local dev

```bash
git clone https://github.com/YOUR-ORG/stellar-portal.git
cd stellar-portal
npm install

cp .env.example .env
# Edit .env — fill in VITE_CASDOOR_URL, VITE_CASDOOR_CLIENT_ID, app URLs

npm run dev
# Open http://localhost:3000
```

### Step 3 — Deploy to Cloudflare Pages (Free, No CC)

1. Go to **https://pages.cloudflare.com** → sign up / login
2. Click **Create application → Pages → Connect to Git**
3. Select your `stellar-portal` repo
4. Build settings:
   ```
   Framework preset: Vite
   Build command:    npm run build
   Output directory: dist
   ```
5. Go to **Settings → Environment Variables** → add all `VITE_*` vars from `.env.example`
6. Deploy → CF gives you `stellar-portal.pages.dev`
7. Add your **custom domain**: `apps.stellarglobalsupplies.com`

---

## Adding a New App

Edit `src/config/apps.js`:

```js
{
  id: 'inventory',
  name: 'Inventory Manager',
  description: 'Track stock levels, orders, and warehouse data.',
  url: import.meta.env.VITE_APP_INVENTORY_URL || '#',
  color: '#10B981',    // green
  category: 'Operations',
  icon: 'box',         // scan | shield | box | chart | truck | document | users | cog
}
```

Then add `VITE_APP_INVENTORY_URL` to:
- Your `.env` (local)
- CF Pages environment variables (production)

---

## Custom Domain Setup

In Cloudflare (you likely already manage DNS there):
1. CF Pages → your project → **Custom domains → Set up a custom domain**
2. Enter `apps.stellarglobalsupplies.com`
3. CF auto-creates the DNS record since you're on Cloudflare DNS
4. SSL is automatic

---

## Phases

| Phase | What | Status |
|---|---|---|
| **P1** | Casdoor + NeonDB on Koyeb | Done |
| **P1.5** | This portal on CF Pages | 📍 This repo |
| **P2** | Migrate 7-8 apps to use Casdoor | Next |
| **P3** | Custom JWT validation in CF Workers | Later |
