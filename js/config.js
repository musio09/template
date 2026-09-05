/**
 * ───────────────────────────────────────────────────────────────────────────
 *  QR MENU — CLIENT CONFIG
 *  Swap this file (or the values below) for each restaurant / café.
 *
 *  Checklist for a new client:
 *    1. restaurant name, tagline, logo, hero image
 *    2. theme colors
 *    3. phone, WhatsApp (digits only, with country code), address
 *    4. hours & timezone
 *    5. categories + menu items (name, price, photo, description)
 *    6. currency / locale
 * ───────────────────────────────────────────────────────────────────────────
 */

export const CONFIG = {
  restaurant: {
    name: "musio",
    tagline: "gurage café & kitchen",
    eyebrow: "Café  ·  Kitchen  ·  Wine",
    description:
      "Sun-drenched plates, wood-fired breads, and a tight list of low-intervention wines. Come for breakfast, stay through last pour.",
    logo: "./assets/logo.svg",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    cuisine: "gurans",
  },

  /**
   * Colors become CSS variables at runtime.
   * mode: "light" | "dark"
   */
  theme: {
    mode: "light",
    background: "#F4EFE6",
    surface: "#FFFCF7",
    elevated: "#EDE6D9",
    text: "#1C1612",
    textMuted: "#6B6158",
    primary: "#C45C26",
    primaryContrast: "#FFF8F1",
    accent: "#2F4A3C",
    accentContrast: "#F4EFE6",
    border: "rgba(28, 22, 18, 0.1)",
    overlay: "rgba(20, 14, 10, 0.45)",
    radius: "18px",
    fontDisplay: '"Fraunces", "Times New Roman", serif',
    fontBody: '"Outfit", "Segoe UI", sans-serif',
  },

  locale: "en-US",
  currency: "USD",
  priceNote: "Prices in USD. Tax not included.",

  contact: {
    phone: "+1 (503) 555-0142",
    phoneHref: "+15035550142",
    whatsapp: "15035550142",
    whatsappMessage: "Hi musio! I’d like to order from the menu.",
    email: "hello@musio09.example",
    address: "142 Grove Street, Portland, OR",
    mapsUrl: "https://maps.google.com/?q=142+Grove+Street+Portland+OR",
    instagram: "whos_mus",
    instagramUrl: "https://instagram.com/whos_mus",
    website: "",
  },

  timezone: "America/Los_Angeles",
  hours: [
    { days: [1, 2, 3, 4, 5], open: "08:00", close: "22:00", label: "Mon–Fri", display: "8:00 am – 10:00 pm" },
    { days: [6, 0], open: "09:00", close: "23:00", label: "Sat–Sun", display: "9:00 am – 11:00 pm" },
  ],

  features: {
    showPhotos: true,
    showFeatured: true,
    showSearch: true,
    showTableField: true,
    allowOrderNotes: true,
    showRating: true,
  },

  rating: {
    score: "4.9",
    label: "Guest favorite",
  },

  order: {
    minOrder: 0,
    pickupLabel: "Order for pickup / table",
    whatsappIntro: "Hello Olivetta! New order:",
    emptyCartHint: "Add a few plates and send the order on WhatsApp.",
  },

  categories: [
    { id: "breakfast", name: "Breakfast" },
    { id: "plates", name: "Small plates" },
    { id: "mains", name: "Mains" },
    { id: "oven", name: "Wood-fired" },
    { id: "sweets", name: "Sweets" },
    { id: "drinks", name: "Drinks" },
  ],

  items: [
    {
      id: "shakshuka",
      category: "breakfast",
      name: "Shakshuka",
      description: "Eggs poached in spiced tomato, peppers, labneh, and warm pita.",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=900&q=80",
      tags: ["popular", "veg"],
      featured: true,
    },
    {
      id: "avo-toast",
      category: "breakfast",
      name: "Avocado, chili & labneh",
      description: "Sourdough, crushed avocado, chili oil, lemon, and thick labneh.",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1541519227354-08bfdaeeec2f?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan"],
    },
    {
      id: "ricotta-hotcakes",
      category: "breakfast",
      name: "Ricotta hotcakes",
      description: "Burnt honey, orange zest, and pistachio crumble.",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
      tags: ["veg"],
    },
    {
      id: "whipped-feta",
      category: "plates",
      name: "Whipped feta & hot honey",
      description: "Sesame, thyme, and grilled focaccia for scooping.",
      price: 13,
      image:
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=900&q=80",
      tags: ["popular", "veg"],
      featured: true,
    },
    {
      id: "olives",
      category: "plates",
      name: "Warm marinated olives",
      description: "Citrus peel, rosemary, and garlic confit.",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan", "gf"],
    },
    {
      id: "burrata",
      category: "plates",
      name: "Burrata & stone fruit",
      description: "Ripe peach, basil oil, aged balsamic, cracked pepper.",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1608897013039-887f21dba900?auto=format&fit=crop&w=900&q=80",
      tags: ["veg", "gf"],
      featured: true,
    },
    {
      id: "octopus",
      category: "plates",
      name: "Charred octopus",
      description: "Smoked paprika, fingerling potatoes, salsa verde.",
      price: 21,
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
      tags: ["gf"],
    },
    {
      id: "hummus",
      category: "plates",
      name: "Smoked hummus",
      description: "Wood-oven chickpeas, cumin oil, pickled chili, herbs.",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan"],
    },
    {
      id: "seabass",
      category: "mains",
      name: "Lemon herb sea bass",
      description: "Grilled whole, fennel salad, and brown-butter capers.",
      price: 34,
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70f?auto=format&fit=crop&w=900&q=80",
      tags: ["popular", "gf"],
      featured: true,
    },
    {
      id: "kofta",
      category: "mains",
      name: "Lamb kofta",
      description: "Charred flatbread, tahini, pickled onion, mint.",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1529006557810-274b0b6db83d?auto=format&fit=crop&w=900&q=80",
      tags: ["spicy"],
    },
    {
      id: "grain-bowl",
      category: "mains",
      name: "Seasonal grain bowl",
      description: "Farro, roasted squash, kale, pomegranate, tahini-lemon.",
      price: 22,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan"],
    },
    {
      id: "mushroom-pasta",
      category: "mains",
      name: "Truffle mushroom tagliatelle",
      description: "Hand-cut pasta, forest mushrooms, thyme, pecorino.",
      price: 26,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
      tags: ["veg"],
    },
    {
      id: "margherita",
      category: "oven",
      name: "Margherita",
      description: "San Marzano, fior di latte, basil, extra virgin.",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
      tags: ["veg", "popular"],
    },
    {
      id: "nduja",
      category: "oven",
      name: "Nduja & honey",
      description: "Spicy spreadable calabrian salami, mozzarella, hot honey.",
      price: 21,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
      tags: ["spicy"],
    },
    {
      id: "focaccia",
      category: "oven",
      name: "Rosemary focaccia",
      description: "Flaky sea salt, olive oil, served with cultured butter.",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1590622783586-e5d3f73eb389?auto=format&fit=crop&w=900&q=80",
      tags: ["veg"],
    },
    {
      id: "olive-cake",
      category: "sweets",
      name: "Olive oil cake",
      description: "Citrus glaze, whipped cream, candied fennel pollen.",
      price: 11,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
      tags: ["veg"],
    },
    {
      id: "affogato",
      category: "sweets",
      name: "Affogato",
      description: "Vanilla gelato drowned in a double espresso.",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
      tags: ["gf", "veg"],
    },
    {
      id: "baklava",
      category: "sweets",
      name: "Pistachio baklava",
      description: "Orange blossom syrup, cracked pistachios, flaky pastry.",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1519676867393-57e4c01d7971?auto=format&fit=crop&w=900&q=80",
      tags: ["veg"],
    },
    {
      id: "espresso",
      category: "drinks",
      name: "House espresso",
      description: "Single origin. Ask for oat or whole milk.",
      price: 4,
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan"],
    },
    {
      id: "spritz",
      category: "drinks",
      name: "Orange blossom spritz",
      description: "Bitter orange, prosecco, soda, olive leaf.",
      price: 13,
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "house-red",
      category: "drinks",
      name: "House red · glass",
      description: "Light, chillable blend from the Willamette Valley.",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan"],
    },
    {
      id: "mint-lemonade",
      category: "drinks",
      name: "Mint lemonade",
      description: "Pressed lemon, crushed mint, sparkling water.",
      price: 6,
      image:
        "https://images.unsplash.com/photo-1523677011780-c54eea8818a0?auto=format&fit=crop&w=900&q=80",
      tags: ["vegan", "gf"],
    },
  ],
};

/**
 * Optional dark theme — copy these values into `theme` above to switch.
 *
 * theme: {
 *   mode: "dark",
 *   background: "#141210",
 *   surface: "#1C1916",
 *   elevated: "#26211C",
 *   text: "#F4EFE6",
 *   textMuted: "#B4A99C",
 *   primary: "#E08A4F",
 *   primaryContrast: "#1C1612",
 *   accent: "#8FAE96",
 *   accentContrast: "#141210",
 *   border: "rgba(244, 239, 230, 0.12)",
 *   overlay: "rgba(8, 6, 4, 0.6)",
 *   radius: "18px",
 *   fontDisplay: '"Fraunces", "Times New Roman", serif',
 *   fontBody: '"Outfit", "Segoe UI", sans-serif',
 * }
 */
