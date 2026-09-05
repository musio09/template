# QR Menu Template

A mobile-first digital menu you can reskin for each restaurant or café. No backend — host the files, point a QR code at the URL, and guests browse, add dishes, and send the order on WhatsApp.

The live demo is branded as **Olivetta**, a Mediterranean café. Swap one config file and it becomes the next client.

## What guests get

- Sticky header, search, and cart
- Photo menu cards with prices, tags, and an add button
- Category chips that follow the scroll
- Chef’s picks carousel
- Dish detail sheet (quantity + note)
- **Order now** → formatted WhatsApp message (name, table, notes, totals)
- Call, WhatsApp, and directions buttons
- Open / closed badge from the client’s timezone and hours
- Per-table QR codes (`?table=7` pre-fills the table field)

## Customize for a new client

All client-specific content lives in **`js/config.js`**. Leave `js/app.js` and `css/styles.css` alone unless you want to change layout.

| Swap | Where |
| --- | --- |
| Name, tagline, about, logo, hero photo | `restaurant` |
| Colors, fonts, light/dark | `theme` |
| Phone, WhatsApp, address, Instagram | `contact` |
| Hours & timezone | `hours`, `timezone` |
| Currency | `locale`, `currency` |
| Categories & dishes | `categories`, `items` |

### Colors

Set `theme.mode` to `"light"` or `"dark"`. A ready-made dark palette is commented at the bottom of `config.js` — paste it over `theme`.

### Photos

Use any HTTPS image URL, or drop files in `assets/` and point at them:

```js
logo: "./assets/logo.svg",
image: "./assets/shakshuka.jpg",
```

Turn photos off with `features.showPhotos: false` for a compact text menu.

### WhatsApp orders

`contact.whatsapp` must be digits only, with country code, no `+` or spaces:

```js
whatsapp: "15035550142",
```

### Per-table QR codes

Open `qr.html`, paste the public menu URL, print. Each code opens:

```
https://your-menu.example/index.html?table=12
```

## Run locally

Any static server works. From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

Upload the folder to Netlify, Cloudflare Pages, GitHub Pages, or any static host. There is no build step.

### GitHub Pages

This repo is a **project site**, so the live URL is:

`https://<user>.github.io/template/`

GitHub Pages must publish the branch that contains `index.html` at the repo root (not only `README.md`). Asset paths are relative and a `<base href="/template/">` is injected on `*.github.io` so CSS, JS, and images load under `/template/`.

1. Replace `js/config.js` and `assets/logo.svg`
2. Drag the folder onto Netlify Drop, or `git push` to Pages
3. Generate a QR code that points at the live URL
4. Print table codes from `/qr.html`

## Project layout

```
index.html      Menu (the guest experience)
qr.html         Printable table QR cards
js/config.js    ← edit this for each client
js/app.js       App logic
css/styles.css  Layout & theme hooks
assets/         Logo & favicon
```

Demo photos are loaded from Unsplash so the template stays small. Swap them for the client’s own shots before launch.
