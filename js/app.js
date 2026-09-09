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
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2" stroke-linecap="round"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor"/></svg>`,
};

const state = {
  cart: loadCart(),
  table: new URLSearchParams(location.search).get("table") || "",
  activeCategory: C.categories[0]?.id || "all",
  itemQty: 1,
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
  let n;
  try {
    n = new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(amount);
  } catch {
    n = String(amount);
  }
  return C.currency ? `${n} ${C.currency}` : n;
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
  document.title = `${C.restaurant.name} · Menu`;

  const fav = assetUrl(C.restaurant.favicon || C.restaurant.logo);
  document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((el) => el.setAttribute("href", fav));

  const manifest = {
    name: `${C.restaurant.name} Menu`,
    short_name: C.restaurant.name,
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
  if (!slot) return { open: false, label: "Closed today", display: "", slot: null };
  const [oh, om] = slot.open.split(":").map(Number);
  const [ch, cm] = slot.close.split(":").map(Number);
  const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm;
  return { open, label: open ? "Open now" : "Closed", display: slot.display, slot };
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
  const labels = C.tagLabels || {};
  return tags
    .filter((t) => t !== "ethiopian")
    .map((t) => `<span class="tag tag--${escapeHtml(t)}">${escapeHtml(labels[t] || t)}</span>`)
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

function billLabel() {
  const n = cartCount();
  if (!n) return "No items yet";
  return `${n} ${n === 1 ? "item" : "items"}`;
}

/** Only the first few photos matter for the first screen — load those right away. */
const EAGER_PHOTOS = 6;
let photoIndex = 0;

function render() {
  const open = openingStatus();
  const showPhotos = C.features.showPhotos !== false;
  photoIndex = 0;

  els.app.innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top">
        <img src="${escapeHtml(assetUrl(C.restaurant.logo))}" alt="" width="32" height="32" />
        <span class="brand__name">${escapeHtml(C.restaurant.name)}</span>
        ${state.table ? `<span class="table-badge">Table ${escapeHtml(state.table)}</span>` : ""}
      </a>
      <div class="header-actions">
        ${C.features.showSearch ? `<button class="icon-btn" data-open-search aria-label="Search menu">${ICONS.search}</button>` : ""}
        <button class="icon-btn icon-btn--cart" data-open-cart aria-label="View cart">
          ${ICONS.cart}
          <span class="cart-count" ${cartCount() ? "" : "hidden"}>${cartCount()}</span>
        </button>
      </div>
    </header>

    <section class="menu-head" id="top">
      <h1>${escapeHtml(C.restaurant.name)}${C.restaurant.tagline ? ` <small>${escapeHtml(C.restaurant.tagline)}</small>` : ""}</h1>
      <div class="menu-head__row">
        <button class="pill ${open.open ? "pill--live" : "pill--closed"}" data-open-hours type="button">${escapeHtml(open.label)}</button>
        <span class="pill">${escapeHtml(open.display || C.restaurant.cuisine)}</span>
        <div class="head-links">
          <a class="qa" href="${telLink()}">${ICONS.phone}<span>Call</span></a>
          <a class="qa qa--wa" href="${waLink()}" target="_blank" rel="noopener">${ICONS.wa}<span>WhatsApp</span></a>
          <a class="qa" href="${escapeHtml(C.contact.mapsUrl)}" target="_blank" rel="noopener">${ICONS.pin}<span>Directions</span></a>
        </div>
      </div>
    </section>

    <div class="cat-nav-wrap">
      <nav class="cat-nav" aria-label="Menu categories">
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

    <main class="menu" id="menu" lang="am">
      ${C.categories
        .map((cat) => {
          const items = C.items.filter((i) => i.category === cat.id);
          if (!items.length) return "";
          return `
            <section class="menu-section" id="cat-${escapeHtml(cat.id)}">
              <h2>${escapeHtml(cat.name)}</h2>
              <div class="dish-list">
                ${items.map((item) => dishCard(item, showPhotos)).join("")}
              </div>
            </section>`;
        })
        .join("")}
    </main>

    <footer class="site-footer">
      <p>${escapeHtml(C.priceNote)}</p>
      <div class="footer-links">
        <a href="${escapeHtml(C.contact.instagramUrl)}" target="_blank" rel="noopener">@${escapeHtml(C.contact.instagram)}</a>
        <a href="${telLink()}">${escapeHtml(C.contact.phone)}</a>
        <a href="${escapeHtml(assetUrl("qr.html"))}">Print table QR codes</a>
      </div>
    </footer>

    <div class="cart-bar ${cartCount() ? "is-visible" : ""}" data-open-cart>
      <div class="cart-bar__meta">
        <strong>${formatPrice(cartTotal())}</strong>
        <small>${billLabel()}</small>
      </div>
      <button class="cart-bar__cta" type="button">View bill</button>
    </div>
  `;

  bindAppEvents();
  observeCategories();
}

function dishCard(item, showPhotos) {
  const sold = item.soldOut;
  const eager = photoIndex++ < EAGER_PHOTOS;
  const photo = showPhotos
    ? `<img class="dish__photo" src="${escapeHtml(assetUrl(item.image))}" alt="${escapeHtml(item.name)}" width="92" height="92" loading="${eager ? "eager" : "lazy"}" decoding="async" data-open-item="${escapeHtml(item.id)}" />`
    : "";
  return `
    <article class="dish${showPhotos ? "" : " no-photo"}${sold ? " is-sold" : ""}">
      ${photo}
      <button class="dish__body" data-open-item="${escapeHtml(item.id)}">
        <span class="dish__name">${escapeHtml(item.name)}</span>
        <span class="tags">${tagsHtml(item.tags)}</span>
      </button>
      <div class="dish__side">
        <span class="price">${formatPrice(item.price)}</span>
        ${
          sold
            ? `<span class="sold-badge">Sold out</span>`
            : `<button class="add-btn" data-add="${escapeHtml(item.id)}" aria-label="Add ${escapeHtml(item.name)} to cart">${ICONS.plus}</button>`
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

function addToCart(id, qty = 1) {
  const item = itemById(id);
  if (!item || item.soldOut) return;
  const existing = state.cart[id];
  state.cart[id] = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    qty: (existing?.qty || 0) + qty,
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
  const count = document.querySelector(".cart-count");
  const n = cartCount();
  if (count) {
    count.hidden = !n;
    count.textContent = n;
  }
  bar?.classList.toggle("is-visible", n > 0);
  const label = document.querySelector(".cart-bar__meta small");
  if (label) label.textContent = billLabel();
  const total = document.querySelector(".cart-bar__meta strong");
  if (total) total.textContent = formatPrice(cartTotal());
}

function openItem(id) {
  const item = itemById(id);
  if (!item) return;
  state.itemQty = 1;
  els.itemSheet.innerHTML = `
    <div class="sheet__grab"></div>
    ${
      C.features.showPhotos
        ? `<img class="sheet__hero" src="${escapeHtml(assetUrl(item.image))}" alt="${escapeHtml(item.name)}" width="440" height="260" />`
        : ""
    }
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="item-sheet-title">${escapeHtml(item.name)}</h2>
        <button class="sheet__close" data-close aria-label="Close">${ICONS.close}</button>
      </div>
      <div class="tags">${tagsHtml(item.tags)}</div>
      <div class="qty-row">
        <strong class="price">${formatPrice(item.price)}</strong>
        <div class="stepper">
          <button type="button" data-step="-1" aria-label="Decrease">−</button>
          <span data-qty>1</span>
          <button type="button" data-step="1" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="primary-btn" data-add-detail ${item.soldOut ? "disabled" : ""}>
        ${item.soldOut ? "Sold out" : `Add · ${formatPrice(item.price)}`}
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
      if (!item.soldOut) cta.textContent = `Add · ${formatPrice(item.price * state.itemQty)}`;
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
        <h2 id="cart-sheet-title">Your bill</h2>
        <button class="sheet__close" data-close aria-label="Close">${ICONS.close}</button>
      </div>
      ${
        lines.length
          ? `<div class="cart-items">
              ${lines
                .map(
                  (line) => `
                <div class="cart-line">
                  <img src="${escapeHtml(assetUrl(line.image))}" alt="" width="64" height="64" loading="lazy" />
                  <div class="cart-line__body">
                    <h3>${escapeHtml(line.name)}</h3>
                    <p>${formatPrice(line.price)} each</p>
                    <div class="stepper stepper--sm">
                      <button type="button" data-line-step="${escapeHtml(line.id)}" data-delta="-1" aria-label="Decrease quantity">−</button>
                      <span>${line.qty}</span>
                      <button type="button" data-line-step="${escapeHtml(line.id)}" data-delta="1" aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                  <div class="cart-line__side">
                    <strong class="price">${formatPrice(line.price * line.qty)}</strong>
                    <button type="button" class="link-btn" data-remove="${escapeHtml(line.id)}">Remove</button>
                  </div>
                </div>`
                )
                .join("")}
            </div>
            <div class="cart-total"><span>Total</span><span>${formatPrice(total)}</span></div>
            <a class="primary-btn" href="${orderLink()}" target="_blank" rel="noopener">Send order on WhatsApp</a>
          `
          : `<div class="cart-empty"><p>${escapeHtml(C.order.emptyCartHint || "Add a dish to start your order.")}</p></div>`
      }
    </div>
  `;

  els.cartSheet.querySelector("[data-close]").addEventListener("click", () => els.cartSheet.close());
  els.cartSheet.querySelectorAll("[data-line-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = (state.cart[btn.dataset.lineStep]?.qty || 0) + Number(btn.dataset.delta);
      setQty(btn.dataset.lineStep, next);
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

function orderLink() {
  const lines = Object.values(state.cart);
  const intro = C.order.whatsappIntro || "New order:";
  const rows = lines.map((line) => `• ${line.name} x${line.qty} — ${formatPrice(line.price * line.qty)}`);
  const text = [intro, ...rows, `Total: ${formatPrice(cartTotal())}`, state.table ? `Table ${state.table}` : ""]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

function openHours() {
  const status = openingStatus();
  els.hoursSheet.innerHTML = `
    <div class="sheet__grab"></div>
    <div class="sheet__body">
      <div class="sheet__top">
        <h2 id="hours-sheet-title">${ICONS.clock} Hours</h2>
        <button class="sheet__close" data-close aria-label="Close">${ICONS.close}</button>
      </div>
      <p class="sheet__note">${status.open ? "Open now — walk in." : "Closed right now. The menu stays open."}</p>
      <div class="hours-list">
        ${C.hours
          .map((h) => `<div><span>${escapeHtml(h.label)}</span><span>${escapeHtml(h.display)}</span></div>`)
          .join("")}
      </div>
      <a class="ghost-btn" href="${escapeHtml(C.contact.mapsUrl)}" target="_blank" rel="noopener">${escapeHtml(C.contact.address)}</a>
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
        <h2 id="search-sheet-title">Search</h2>
        <button class="sheet__close" data-close aria-label="Close">${ICONS.close}</button>
      </div>
      <label class="field">
        <input type="search" data-q placeholder="Find a dish…" autocomplete="off" />
      </label>
      <div class="search-list" data-results></div>
    </div>
  `;
  els.searchSheet.showModal();
  const input = els.searchSheet.querySelector("[data-q]");
  const results = els.searchSheet.querySelector("[data-results]");
  const paint = () => {
    const q = input.value.trim().toLowerCase();
    const matches = q ? C.items.filter((i) => `${i.name} ${i.id} ${i.tags.join(" ")}`.toLowerCase().includes(q)) : C.items;
    results.innerHTML = matches.length
      ? matches.map((item) => dishCard(item, true)).join("")
      : `<p class="cart-empty">Nothing here.</p>`;
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
