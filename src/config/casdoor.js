import Sdk from 'casdoor-js-sdk'

// All values come from .env (local) or CF Pages env vars (production)
// Never hardcode secrets here
export const casdoorConfig = {
  serverUrl:        import.meta.env.VITE_CASDOOR_URL,        // https://sso.stellarglobalsupplies.com
  clientId:         import.meta.env.VITE_CASDOOR_CLIENT_ID,  // from Casdoor dashboard
  appName:          import.meta.env.VITE_CASDOOR_APP_NAME,   // stellar-portal
  organizationName: import.meta.env.VITE_CASDOOR_ORG,        // stellar-global
  redirectPath:     '/callback',
  scopes:           'openid profile email',
}

export const sdk = new Sdk(casdoorConfig)
