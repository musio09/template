# Musio Café & Kitchen — QR Menu

A mobile-first digital menu for the café. No backend, no build step: the menu is the page, the photos live in `assets/menu/`, and everything is driven by `js/config.js`.

Guests scan the table QR code, see the dish list straight away (Amharic names, prices in ብር, no long descriptions), tap **+** to add, and send the bill on WhatsApp.

## What guests get

- Sticky header with search and cart
- Amharic dish names with a matching photo each — no descriptions to read
- Category chips that follow the scroll
- Dish sheet for quantity
- **Send order on WhatsApp** → formatted message (dishes, quantities, total, table)
- Call, WhatsApp and directions buttons
- Open / closed badge from the café’s timezone and hours
- Per-table QR codes (`?table=7` shows the table on every screen)

The page paints immediately: fonts load in the background and the dish photos are local files, so there is no “Setting the table…” wait any more.

## Customize for a new client

All client-specific content lives in **`js/config.js`**. Leave `js/app.js` and `css/styles.css` alone unless you want to change layout.

| Swap | Where |
| --- | --- |
| Name, Amharic tagline, logo | `restaurant` |
| Colors, fonts, light/dark | `theme` |
| Phone, WhatsApp, address, Instagram | `contact` |
| Hours & timezone | `hours`, `timezone` |
| Currency label | `locale`, `currency` |
| Categories & dishes (name, price, photo, badge) | `categories`, `items` |
| Badge wording (ተወዳጅ, ተክል…) | `tagLabels` |

### Colors

Set `theme.mode` to `"light"` or `"dark"`. A ready-made dark palette is commented at the bottom of `config.js` — paste it over `theme`.

### Photos

Drop the dish photo in `assets/menu/<dish-id>.jpg` and point at it — the file name matches the dish `id`, so the picture and the dish can't drift apart:

```js
{ id: "doro-wot", category: "ethiopian", name: "ዶሮ ወጥ", price: 480, image: "./assets/menu/doro-wot.jpg", tags: ["popular"] },
```

Suggested size: 440×440 px, square crop (that is what is in the repo now; replace with the café's own shots any time).
Turn photos off with `features.showPhotos: false` for a text-only menu.

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

Photos in `assets/menu/` are placeholders — swap them for the café's own shots before launch.
