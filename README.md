# Personal Website — Kaleb Mekonen Legese

This is a static portfolio site built with HTML, CSS, and JavaScript.

## What is included

- `index.html` — home page with hero, learning timeline, and overview
- `about.html` — personal story, skills, and goals
- `projects.html` — project showcase with contact request actions
- `resources.html` — dynamic resource library loaded from `resources.json`
- `opportunities.html` — scholarship, internship, and fellowship opportunities
- `news.html` — dynamic news feed loaded from `news.json`
- `contact.html` — contact page with email-based contact and subscribe flows
- `css/style.css` — responsive styling and shared layout
- `js/script.js` — theme toggle, page effects, and resource/news rendering
- `favicon.svg` — site favicon

## Deployment steps

1. Host the static site on any static host:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting
   - Any shared/static host

2. Upload the full contents of this folder.

3. Verify the site loads successfully.

## Verification checklist

- [ ] `resources.json` loads correctly on `resources.html`
- [ ] `news.json` loads correctly on `news.html`
- [ ] Contact form opens the email client with pre-filled details
- [ ] Subscribe form opens the email client with pre-filled subscribe request
- [ ] Header newsletter badge links to the subscribe section
- [ ] `favicon.svg` displays in browser tabs

## Notes

- The site is fully functional with current static content.
- Real GitHub repo links and live demos can be added later in `projects.html`.
- Real LinkedIn profile URL can be added later in `resources.html` and `contact.html`.
- `resources.json` and `news.json` are easy to update without editing HTML.
- You can also set up Supabase to power live news, resources, and project updates without redeploying.

## Supabase dynamic content setup

1. Create a free Supabase project at https://app.supabase.com.
2. Add tables named `news`, `resources`, `projects`, `opportunities`, and `about`.
   - Example `news` columns: `id`, `title`, `summary`, `url`, `buttonText`, `category`.
   - Example `resources` columns: `id`, `title`, `description`, `url`, `buttonText`, `category`, `openInNewTab`, `download`.
   - Example `projects` columns: `id`, `title`, `description`, `tech`, `status`, `category`, `imageLabel`, `sourceUrl`, `sourceLabel`, `demoUrl`, `demoLabel`.
   - Example `opportunities` columns: `id`, `title`, `description`, `url`, `buttonText`, `category`.
   - Example `about` columns: `id`, `label`, `title`, `description`, `mediaUrl`, `mediaType`, `poster`, `alt`, `displayOrder`.
3. Copy `js/supabase-config.example.js` to `js/supabase-config.js`.
4. Fill in your Supabase project URL and public anon key.
5. Deploy the site normally; the pages will automatically fetch from Supabase when config is present.

> If `js/supabase-config.js` is missing, the site continues to use local `resources.json` and `news.json`.

## Uploading assets (images, videos, PDFs)

1. Create a public bucket in Supabase Storage (for example `public-assets`).
2. Copy `js/supabase-config.example.js` to `js/supabase-config.js` and add your `url` and `key`.
3. Open `upload.html` in your browser (you can run it locally or after deployment).  
4. Choose the bucket name, set a target path (for example `about/childhood.jpg`), choose a file, and click `Upload`.  
5. The page will show a public URL you can copy into the `mediaUrl` column when inserting rows into the `about` table.

Notes:
- The page uses the anon/public key from your `js/supabase-config.js`. Make sure your bucket allows uploads from the anon role or use appropriate credentials.
- Keep private documents (IDs, sensitive PDFs) out of public buckets unless you implement access control or signed URLs.
