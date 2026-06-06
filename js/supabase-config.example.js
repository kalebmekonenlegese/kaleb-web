// Supabase config example and Vercel deployment notes.
// ----------------------------------------------------
// SECURITY: Do NOT commit real keys to your repo. Use the
// public ANON key only (never the service_role key) and keep
// secrets out of source control.

// Recommended approaches:
// 1) Local development (quick): copy this file to `js/supabase-config.js`
//    and fill in your `url` and `key` values. Keep that file out of Git.
//
// 2) Vercel (recommended for production): set the environment variables
//    `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your Vercel Project -> Settings -> Environment Variables.
//    Then generate `js/supabase-config.js` at build time so the runtime code
//    can read the values without committing them.

// Example build-time generator (create `scripts/generate-supabase-config.js`):
// ```node
// const fs = require('fs');
// const path = require('path');
// const out = path.join(__dirname, '..', 'js', 'supabase-config.js');
// const cfg = {
//   url: process.env.SUPABASE_URL || '',
//   key: process.env.SUPABASE_ANON_KEY || '',
//   newsTable: 'news',
//   resourcesTable: 'resources',
//   projectsTable: 'projects',
//   opportunitiesTable: 'opportunities',
//   aboutTable: 'about'
// };
// fs.writeFileSync(out, `window.SUPABASE_CONFIG = ${JSON.stringify(cfg, null, 2)};\n`);
// ```
// Add to `package.json` scripts:
// ```json
// {
//   "scripts": {
//     "prebuild": "node scripts/generate-supabase-config.js",
//     "build": "your-build-command"
//   }
// }
// ```

// Vercel notes:
// - Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` for Production and Preview.
// - Use the ANON key with Row Level Security (RLS) enabled and proper policies.
// - Avoid exposing service_role keys to the browser; use serverless functions for privileged operations.
// - When using Realtime, ensure your project's Realtime settings allow subscriptions from the deployed domain.

// Minimal local fallback example (safe placeholder - do not commit real keys):
window.SUPABASE_CONFIG = {
  url: 'https://YOUR_PROJECT_REF.supabase.co',
  key: 'YOUR_PUBLIC_ANON_KEY',
  newsTable: 'news',
  resourcesTable: 'resources',
  projectsTable: 'projects',
  opportunitiesTable: 'opportunities',
  aboutTable: 'about'
};
