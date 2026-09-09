import { CONFIG as C } from "./config.js";

/** Site root (parent of /js/), so assets work on GitHub Pages /template/. */
const SITE_ROOT = new URL("../", import.meta.url);

function assetUrl(path) {
  if (!path) return "";
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:") || path.startsWith("#")) {
    return path;
  }
  return new URL(String(path).replace(/^\.\//, ""), SITE_ROOT).href;
}

const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3" stroke-linecap="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h2l1.2 9.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L20 8H7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.2" fill="currentColor"/><circle cx="17" cy="20" r="1.2" fill="currentColor"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 6v12M6 12h12" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7l10 10M17 7L7 17" stroke-linecap="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h3l1 4-2 1a12 12 0 0 0 6 6l1-2 4 1v3a2 2 0 0 1-2 2A15 15 0 0 1 5 7a2 2 0 0 1 2-2z" stroke-linejoin="round"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.28z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor"/></svg>`,
};

const T = {
  cart: "\u12ab\u122d\u1275",
  search: "\u1348\u120d",
  hours: "\u1230\u12d3\u1276\u127d",
  open: "\u12ad\u134d\u1275",
  closed: "\u12d8\u130d\u1277\u120d",
  table: "\u12a8\u122d\u1232",
  addToCart: "\u12a8\u12ab\u122d\u1275 \u120b\u12ed \u1328\u121d\u122d",
  soldOut: "\u1328\u122d\u1237\u120d",
  yourCart: "\u12e8\u12a5\u122d\u1235\u12ce \u12ab\u122d\u1275",
  each: "\u12a5\u12eb\u1295\u12f3\u1295\u12f1",
  total: "\u1320\u1245\u120b\u120b",
  remove: "\u12a0\u1235\u12c8\u130d\u12f5",
  order: "\u1260\u12cb\u1275\u1235\u12a0\u1355 \u12a0\u12dd\u12dd",
  items: "\u121d\u122d\u1276\u127d",
  bill: "\u1218\u122d\u1218\u122d",
  noResults: "\u121d\u1295\u121d \u12a0\u120d\u1270\u1308\u1298\u121d",
  findDish: "\u121d\u130d\u1265 \u12ed\u1348\u120d\u1309",
  searchPh: "\u12aa\u1275\u1363 \u12db\u1363 \u1261\u1293 …",
  place: "\u1266\u1273\u127d\u1295",
  call: "\u12f0\u12cd\u120d",
  whatsapp: "\u12cb\u1275\u1235\u12a0\u1355",
  directions: "\u1218\u1295\u1308\u12f5",
  printQR: "QR \u12ae\u12f6\u127d\u1295 \u12a0\u1275\u121d",
  totalWord: "\u1320\u1245\u120b\u120b",
  hoursOpen: "\u12ad\u134d\u1275 \u1290\u12cb\u120d — \u1218\u1291\u1295 \u12ed\u1218\u120d\u12a9\u1362",
  hoursClosed: "\u12a0\u1201\u1295 \u12d8\u130d\u1277\u120d\u1362 \u1218\u1291\u1295 \u12ed\u1240\u1219\u1362",
};

const TAG_LABELS = {
  popular: "\u12e8\u1270\u12c8\u12f0\u12f0",
  veg: "\u12e8\u12a0\u1275\u12ad\u120d\u1275",
  vegan: "\u126b\u1308\u1295",
  spicy: "\u122b\u1233",
  gf: "\u12eb\u1208 \u130d\u1209\u1270\u1295",
  new: "\u12a0\u12f2\u1235",
};

const state = {
  cart: loadCart(),
  table: new URLSearchParams(location.search).get("table") || "",
  guestName: "",
  note: "",
  activeCategory: C.categories[0]?.id || "all",
  itemQty: 1,
  itemNote: "",
};

const els = {
  app: document.querySelector("#app"),
  itemSheet: document.querySelector("#item-sheet"),
  cartSheet: document.querySelector("#cart-sheet"),
  searchSheet: document.querySelector("#search-sheet"),
  hoursSheet: document.querySelector("#hours-sheet"),
};

function loadCart() {
  try {
    return JSON.parse(sessionStorage.getItem("qr-cart") || "{}");
  } catch {
    return {};
  }
}

function saveCart() {
  sessionStorage.setItem("qr-cart", JSON.stringify(state.cart));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatPrice(amount) {
  return new Intl.NumberFormat(C.locale, {
    style: "currency",
    currency: C.currency,
    currencyDisplay: "code",
    maximumFractionDigits: 0,
  }).format(amount);
}

function applyTheme() {
  const t = C.theme;
  const root = document.documentElement;
  const map = {
    "--bg": t.background,
    "--surface": t.surface,
    "--elevated": t.elevated,
    "--text": t.text,
    "--text-muted": t.textMuted,
    "--primary": t.primary,
    "--primary-contrast": t.primaryContrast,
    "--accent": t.accent,
    "--accent-contrast": t.accentContrast,
    "--border": t.border,
    "--overlay": t.overlay,
    "--radius": t.radius,
    "--font-display": t.fontDisplay,
    "--font-body": t.fontBody,
  };
  Object.entries(map).forEach(([k, v]) => v && root.style.setProperty(k, v));
  document.body.dataset.theme = t.mode || "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t.background);
  document.title = `${C.restaurant.name} · \u121D\u1213\u1299`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${C.restaurant.name} — ${T.meta_desc}`);

  const fav = assetUrl(C.restaurant.favicon || C.restaurant.logo);
  document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((el) => {
    el.setAttribute("href", fav);
  });
  document.querySelector(".boot__logo")?.setAttribute("src", assetUrl(C.restaurant.logo));

  const manifest = {
    name: `${C.restaurant.name} Menu`,
    short_name: C.restaurant.shortName || C.restaurant.name,
    start_url: new URL("index.html", SITE_ROOT).href,
    display: "standalone",
    background_color: t.background,
    theme_color: t.accent,
    icons: [{ src: fav, sizes: "any", type: fav.includes(".svg") ? "image/svg+xml" : "image/png" }],
  };
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    const blob = new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" });
    manifestLink.href = URL.createObjectURL(blob);
  }
}

function getLocalParts() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: C.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date()).map((p) => [p.type, p.value]));
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: dayMap[parts.weekday] ?? new Date().getDay(),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

function openingStatus() {
  const { day, minutes } = getLocalParts();
  const slot = C.hours.find((h) => h.days.includes(day));
  if (!slot) return { open: false, label: T.closed, slot: null };
  const [oh, om] = slot.open.split(":").map(Number);
  const [ch, cm] = slot.close.split(":").map(Number);
  const openMins = oh * 60 + om;
  const closeMins = ch * 60 + cm;
  const open = minutes >= openMins && minutes < closeMins;
  return {
    open,
    label: open ? T.open : T.closed,
    display: slot.display,
    slot,
  };
}

function itemById(id) {
  return C.items.find((i) => i.id === id);
}

function cartCount() {
  return Object.values(state.cart).reduce((n, line) => n + line.qty, 0);
}

function cartTotal() {
  return Object.values(state.cart).reduce((n, line) => n + line.qty * line.price, 0);
}

function tagsHtml(tags = []) {
  return tags
    .map((t) => `<span class="tag tag--${escapeHtml(t)}">${escapeHtml(TAG_LABELS[t] || t)}</span>`)
    .join("");
}

function waLink() {
  const msg = C.contact.whatsappMessage;
  if (!msg) return `https://wa.me/${C.contact.whatsapp}`;
  return `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function telLink() {
  return `tel:${C.contact.phoneHref}`;
}

function orderLink() {
  const lines = Object.values(state.cart).map(
    (line, i) => `${i + 1}. ${line.name} x${line.qty} \u2014 ${formatPrice(line.price * line.qty)}`
  );
  const tableLine = state.table ? `${T.table} ${state.table}\n` : "";
  const msg = `${C.order.whatsappIntro}\n${tableLine}${lines.join("\n")}\n${T.totalWord}: ${formatPrice(cartTotal())}`;
  return `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function render() {
  const open = openingStatus();
  const showPhotos = C.features.showPhotos !== false;
  const brand = C.restaurant.shortName || C.restaurant.name;

  els.app.innerHTML = `
    <header class="site-header" id="top">
      <a class="brand" href="#top">
        <img src="${escapeHtml(assetUrl(C.restaurant.logo))}" alt="" />
        <span class="brand__name">${escapeHtml(brand)}</span>
        ${state.table ? `<span class="table-badge">${T.table} ${escapeHtml(state.table)}</span>` : ""}
      </a>
      <div class="header-actions">
        <button class="status-pill ${open.open ? "pill--live" : "pill--closed"}" data-open-hours type="button" aria-label="${T.hours}">
          ${escapeHtml(open.label)}
        </button>
        ${
          C.features.showSearch
            ? `<button class="icon-btn" data-open-search aria-label="${T.search}">${ICONS.search}</button>`
            : ""
        }
        <button class="icon-btn icon-btn--cart" data-open-cart aria-label="${T.cart}">
          ${ICONS.cart}
          <span class="cart-count" ${cartCount() ? "" : "hidden"}>${cartCount()}</span>
        </button>
      </div>
    </header>

    <div class="cat-nav-wrap">
      <nav class="cat-nav" aria-label="${C.restaurant.name}">
        ${C.categories
          .map(
            (cat) => `
          <button class="chip ${cat.id === state.activeCategory ? "is-active" : ""}" data-cat="${escapeHtml(cat.id)}">
            ${escapeHtml(cat.name)}
          </button>`
          )
          .join("")}
      </nav>
    </div>

    <main class="menu" id="menu">
      ${C.categories
        .map((cat) => {
          const items = C.items.filter((i) => i.category === cat.id);
          if (!items.length) return "";
          return `
            <section class="menu-section" id="cat-${escapeHtml(cat.id)}">
              <h3>${escapeHtml(cat.name)}</h3>
              <div class="dish-list">
                ${items.map((item) => dishCard(item, showPhotos)).join("")}
              </div>
            </section>`;
        })
        .join("")}
    </main>

    <section class="contact" id="contact">
      <div>
        <h2>${T.place}</h2>
        <div class="contact-list">
          <a href="${escapeHtml(C.contact.mapsUrl)}" target="_blank" rel="noopener">${ICONS.pin} ${escapeHtml(C.contact.address)}</a>
          <a href="${telLink()}">${ICONS.phone} ${escapeHtml(C.contact.phone)}</a>
          <a href="${waLink()}" target="_blank" rel="noopener">${ICONS.wa} ${T.whatsapp}</a>
          ${
            C.contact.instagram
              ? `<a href="${escapeHtml(C.contact.instagramUrl)}" target="_blank" rel="noopener">${ICONS.ig} @${escapeHtml(C.contact.instagram)}</a>`
              : ""
          }
        </div>
      </div>
      <div>
        <div class="hours-list">
          ${C.hours
            .map(
              (h) => `<div><span>${escapeHtml(h.label)}</span><span>${escapeHtml(h.display)}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <p>${escapeHtml(C.priceNote)}</p>
      <p style="margin-top:8px"><a href="${escapeHtml(assetUrl("qr.html"))}">${T.printQR}</a></p>
    </footer>

    <div class="fabs ${cartCount() ? "is-raised" : ""}">
      <a class="fab fab--wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="${T.whatsapp}">${ICONS.wa}</a>
      <a class="fab fab--call" href="${telLink()}" aria-label="${T.call}">${ICONS.phone}</a>
    </div>

    <div class="cart-bar ${cartCount() ? "is-visible" : ""}" data-open-cart>
      <div class="cart-bar__meta">
        <strong>${cartCount()} ${T.items} · ${formatPrice(cartTotal())}</strong>
        <small>${T.bill}</small>
      </div>
      <button class="cart-bar__cta" type="button">${T.bill}</button>
    </div>
  `;

  bindAppEvents();
  observeCategories();
}

function dishCard(item, showPhotos) {
  const sold = item.soldOut;
  return `
    <article class="dish ${showPhotos ? "" : "no-photo"} ${sold ? "is-sold" : ""}">
      ${showPhotos ? `<img class="dish__photo" src="${escapeHtml(assetUrl(item.image))}" alt="${escapeHtml(item.name)}" loading="lazy" data-open-item="${escapeHtml(item.id)}" />` : ""}
      <button class="dish__body" data-open-item="${escapeHtml(item.id)}">
        <div class="dish__name">${escapeHtml(item.name)}</div>
        ${item.description ? `<p class="dish__desc">${escapeHtml(item.description)}</p>` : ""}
        ${item.tags?.length ? `<div class="tags">${tagsHtml(item.tags)}</div>` : ""}
      </button>
      <div class="dish__side">
        <span class="price">${formatPrice(item.price)}</span>
        ${
          sold
            ? `<span class="sold-badge">${T.soldOut}</span>`
            : `<button class="add-btn" data-add="${escapeHtml(item.id)}" aria-label="${T.addToCart}">${ICONS.plus}</button>`
        }
      </div>
    </article>`;
}

function bindAppEvents() {
  els.app.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.add, 1);
    });
  });

  els.app.querySelectorAll("[data-open-item]").forEach((el) => {
    el.addEventListener("click", () => openItem(el.dataset.openItem));
  });

  els.app.querySelectorAll("[data-open-cart]").forEach((el) => {
    el.addEventListener("click", openCart);
  });

  els.app.querySelector("[data-open-search]")?.addEventListener("click", openSearch);
  els.app.querySelector("[data-open-hours]")?.addEventListener("click", openHours);

  els.app.querySelectorAll("[data-cat]").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.activeCategory = chip.dataset.cat;
      document.querySelector(`#cat-${chip.dataset.cat}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      els.app.querySelectorAll("[data-cat]").forEach((c) => c.classList.toggle("is-active", c === chip));
    });
  });
}

function observeCategories() {
  const sections = [...document.querySelectorAll(".menu-section")];
  if (!sections.length) return;
  const chips = [...document.querySelectorAll("[data-cat]")];
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id.replace("cat-", "");
      state.activeCategory = id;
      chips.forEach((c) => c.classList.toggle("is-active", c.dataset.cat === id));
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.4] }
  );
  sections.forEach((s) => io.observe(s));
}

function addToCart(id, qty = 1, note = "") {
  const item = itemById(id);
  if (!item || item.soldOut) return;
  const existing = state.cart[id];
  state.cart[id] = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    qty: (existing?.qty || 0) + qty,
    note: note || existing?.note || "",
  };
  saveCart();
  pulseCart();
}

function setQty(id, qty) {
  if (qty <= 0) delete state.cart[id];
  else if (state.cart[id]) state.cart[id].qty = qty;
  saveCart();
}

function pulseCart() {
  const bar = document.querySelector(".cart-bar");
  const fabs = document.querySelector(".fabs");
  const count = document.querySelector(".cart-count");
  const n = cartCount();
  if (count) {
    count.hidden = !n;
    count.textContent = n;
  }
  bar?.classList.toggle("is-visible", n > 0);
  fabs?.classList.toggle("is-raised", n > 0);
  const meta = document.querySelector(".cart-bar__meta strong");
  if (meta) meta.textContent = `${n} ${T.items} · ${formatPrice(cartTotal())}`;
}

function openItem(id) {
  const item = itemById(id);
  if (!item) return;
  state.itemQty = 1;
  state.itemNote = "";
  els.itemSheet.innerHTML = `
    <div class="sheet__grab"></div>
    ${C.features.showPhotos ? `<img class="sheet__hero" src="${escapeHtml(assetUrl(item.image))}" alt="${escapeHtml(item.name)}" />` : ""}
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="item-sheet-title">${escapeHtml(item.name)}</h2>
        <button class="sheet__close" data-close aria-label="close">${ICONS.close}</button>
      </div>
      ${item.tags?.length ? `<div class="tags">${tagsHtml(item.tags)}</div>` : ""}
      ${item.description ? `<p class="sheet__desc">${escapeHtml(item.description)}</p>` : ""}
      <div class="qty-row">
        <strong class="price">${formatPrice(item.price)}</strong>
        <div class="stepper">
          <button type="button" data-step="-1" aria-label="-">−</button>
          <span data-qty>1</span>
          <button type="button" data-step="1" aria-label="+">+</button>
        </div>
      </div>
      <button class="primary-btn" data-add-detail ${item.soldOut ? "disabled" : ""}>
        ${item.soldOut ? T.soldOut : `${T.addToCart} · ${formatPrice(item.price)}`}
      </button>
    </div>
  `;
  els.itemSheet.showModal();
  els.itemSheet.querySelector("[data-close]").addEventListener("click", () => els.itemSheet.close());
  els.itemSheet.querySelectorAll("[data-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.itemQty = Math.max(1, state.itemQty + Number(btn.dataset.step));
      els.itemSheet.querySelector("[data-qty]").textContent = state.itemQty;
      const cta = els.itemSheet.querySelector("[data-add-detail]");
      if (!item.soldOut) cta.textContent = `${T.addToCart} · ${formatPrice(item.price * state.itemQty)}`;
    });
  });
  els.itemSheet.querySelector("[data-add-detail]")?.addEventListener("click", () => {
    addToCart(item.id, state.itemQty);
    els.itemSheet.close();
  });
}

function openCart() {
  renderCart();
  els.cartSheet.showModal();
}

function renderCart() {
  const lines = Object.values(state.cart);
  const total = cartTotal();
  els.cartSheet.innerHTML = `
    <div class="sheet__grab"></div>
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="cart-sheet-title">${T.yourCart}</h2>
        <button class="sheet__close" data-close aria-label="close">${ICONS.close}</button>
      </div>
      ${
        lines.length
          ? `<div class="cart-items">
              ${lines
                .map(
                  (line) => `
                <div class="cart-line">
                  <img src="${escapeHtml(assetUrl(line.image))}" alt="" />
                  <div>
                    <h3>${escapeHtml(line.name)}</h3>
                    <p>${formatPrice(line.price)} ${T.each}</p>
                    <div class="stepper" style="margin-top:8px">
                      <button type="button" data-line-step="${escapeHtml(line.id)}" data-delta="-1" aria-label="-">−</button>
                      <span>${line.qty}</span>
                      <button type="button" data-line-step="${escapeHtml(line.id)}" data-delta="1" aria-label="+">+</button>
                    </div>
                    <button type="button" data-remove="${escapeHtml(line.id)}" style="margin-top:6px;font-size:0.75rem;font-weight:600;color:var(--text-muted);min-height:32px">${T.remove}</button>
                  </div>
                  <strong class="price">${formatPrice(line.price * line.qty)}</strong>
                </div>`
                )
                .join("")}
            </div>
            <div class="cart-total"><span>${T.total}</span><span>${formatPrice(total)}</span></div>
            <a class="primary-btn order-btn" href="${orderLink()}" target="_blank" rel="noopener">${ICONS.wa} ${T.order}</a>
          `
          : `<div class="cart-empty"><p>${escapeHtml(C.order.emptyCartHint)}</p></div>`
      }
    </div>
  `;

  els.cartSheet.querySelector("[data-close]").addEventListener("click", () => els.cartSheet.close());
  els.cartSheet.querySelectorAll("[data-line-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.lineStep;
      const next = (state.cart[id]?.qty || 0) + Number(btn.dataset.delta);
      setQty(id, next);
      pulseCart();
      renderCart();
    });
  });
  els.cartSheet.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setQty(btn.dataset.remove, 0);
      pulseCart();
      renderCart();
    });
  });
}

function openHours() {
  const status = openingStatus();
  els.hoursSheet.innerHTML = `
    <div class="sheet__grab"></div>
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="hours-sheet-title">${T.hours}</h2>
        <button class="sheet__close" data-close aria-label="close">${ICONS.close}</button>
      </div>
      <p class="sheet__desc">${status.open ? T.hoursOpen : T.hoursClosed}</p>
      <div class="hours-list" style="color: inherit;">
        ${C.hours
          .map(
            (h) => `<div><span>${escapeHtml(h.label)}</span><span>${escapeHtml(h.display)}</span></div>`
          )
          .join("")}
      </div>
    </div>
  `;
  els.hoursSheet.showModal();
  els.hoursSheet.querySelector("[data-close]").addEventListener("click", () => els.hoursSheet.close());
}

function openSearch() {
  els.searchSheet.innerHTML = `
    <div class="sheet__grab"></div>
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="search-sheet-title">${T.search}</h2>
        <button class="sheet__close" data-close aria-label="close">${ICONS.close}</button>
      </div>
      <label class="field">
        <span>${T.findDish}</span>
        <input type="search" data-q placeholder="${T.searchPh}" autofocus />
      </label>
      <div class="search-list" data-results></div>
    </div>
  `;
  els.searchSheet.showModal();
  const input = els.searchSheet.querySelector("[data-q]");
  const results = els.searchSheet.querySelector("[data-results]");
  const paint = () => {
    const q = input.value.trim().toLowerCase();
    const matches = q
      ? C.items.filter((i) => `${i.name} ${i.description || ""} ${i.tags.join(" ")}`.toLowerCase().includes(q))
      : C.items.slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map((item) => dishCard(item, true)).join("")
      : `<p class="cart-empty">${T.noResults}</p>`;
    results.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(btn.dataset.add, 1);
      });
    });
    results.querySelectorAll("[data-open-item]").forEach((el) => {
      el.addEventListener("click", () => {
        els.searchSheet.close();
        openItem(el.dataset.openItem);
      });
    });
  };
  input.addEventListener("input", paint);
  paint();
  els.searchSheet.querySelector("[data-close]").addEventListener("click", () => els.searchSheet.close());
  setTimeout(() => input.focus(), 50);
}

document.querySelectorAll(".sheet").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll("dialog[open]").forEach((d) => d.close());
  }
});

applyTheme();
render();
