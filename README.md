# Musio · የመኒ (QR Menu)

A fast, mobile-first digital menu for **Musio Café & Kitchen**. No backend — host the files, point a QR code at the URL, and guests browse, add dishes, and send the order on WhatsApp.

## How it works

- **One fast page.** `index.html` is self-contained — styles, menu data, and app logic are all inlined. No separate CSS/JS requests, **no loading screen** — the menu is the first thing you see, and it appears as soon as the file arrives.
- The whole UI is in **Amharic**, menu-first: no landing hero, no long descriptions.
- Every dish photo is a local file in `assets/foods/` that **matches its dish** (and is compressed for fast loading).

## What guests get

- Compact sticky header: logo, open/closed pill, search, cart
- **Menu first** — category chips + photo dish cards, no landing page
- Dish detail sheet (quantity)
- **Cart → WhatsApp** order button (table number, line items, total in ETB)
- Call, WhatsApp, and directions buttons
- Open / closed status from the Addis Ababa timezone
- Per-table QR codes (`?table=7` shows the table in the header)
- No external fonts or CDNs — system Ethiopic fonts

## Customize

⚠️ **The guest menu is edited inside `index.html`** (the inlined `CONFIG` object at the top of the big `<script>` block). `js/config.js` holds the same config for `qr.html` — **keep the two in sync**.

| Swap | Where in `CONFIG` |
| --- | --- |
| Name, tagline, logo | `restaurant` |
| Colors, light/dark | `theme` |
| Phone, WhatsApp, address, Instagram | `contact` |
| Hours & timezone | `hours`, `timezone` |
| Currency | `locale`, `currency` |
| Categories & dishes | `categories`, `items` |

### Photos

Local files in `assets/foods/` (one per dish), referenced from `items[].image`:

```js
image: "./assets/foods/doro-wot.jpg",
```

Swap a photo by replacing the file (same name), or point `image` at a new path / HTTPS URL. Keep images ≤ ~720px wide so the menu stays fast. Turn photos off with `features.showPhotos: false` for a compact text menu.

### WhatsApp orders

`contact.whatsapp` must be digits only, with country code, no `+` or spaces:

```js
whatsapp: "2519XXXXXXXX",
```

The cart order button sends:

```
ሰላም ሙሺ! አዲስ አዝዝ:
1. ስፔሻል ል x1 — ETB 180
2. ቻኪን ፒዛ x1 — ETB 520
ጠቅላ: ETB 700
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

GitHub Pages must publish the branch that contains `index.html` at the repo root. Asset paths are relative and a `<base href="/template/">` is injected on `*.github.io` so images load under `/template/`.

## Project layout

```
index.html      Menu (self-contained: styles + config + app logic inlined)
qr.html         Printable table QR cards
js/config.js    Config for qr.html (keep in sync with index.html)
assets/         Logo, favicon, and dish photos (assets/foods/)
```
