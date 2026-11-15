# The YARN NEST

A responsive static storefront starter for Cloudflare Pages.

## Preview locally
Open `index.html` in a browser.

## Deploy to Cloudflare Pages
1. Extract this ZIP.
2. Create a GitHub repository and upload the contents of this folder (keep `index.html` at the repository root).
3. In Cloudflare, open **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
4. Select the repository. For this plain HTML/CSS/JS project, use:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `/` (or `.` if the dashboard requests a relative path)
5. Deploy. Cloudflare will provide a free `*.pages.dev` address.

## Before launch
- Replace sample product cards with real products, photos and prices.
- Replace the placeholder contact email.
- Add a real checkout/payment provider and order handling. The shopping bag is currently a placeholder, not a working checkout.
- Add your own policies: shipping, returns, privacy and terms.

No domain is included or required for the first deployment. You can connect a domain later.
