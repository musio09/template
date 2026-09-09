/**
 * ───────────────────────────────────────────────────────────────────────────
 *  QR MENU — CLIENT CONFIG
 *  All client-specific content lives here. Edit this file per restaurant.
 *
 *  ⚠️ SYNC NOTE: `index.html` inlines its own copy of this CONFIG so the
 *  guest page opens instantly (single file, no extra requests). If you
 *  change anything here, apply the same change to the `CONFIG` object at
 *  the top of the inline <script> in index.html.
 *
 *  This file is imported by qr.html (printable table QR codes).
 *
 *  Musio Café & Kitchen — Amharic menu.
 *  Food photos are local files in ./assets/foods/ so the menu loads fast
 *  and every photo matches its dish. To swap a photo, replace the file
 *  (same name) or point `image` at a new path / HTTPS URL.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const CONFIG = {
  restaurant: {
    name: "Musio Café & Kitchen",
    shortName: "Musio",
    favicon: "./assets/favicon.svg",
    tagline: "ኢትዮጵያ · ቡርጌር · ፒዛ · ጭማቂ · ቡና",
    description:
      "የኢትዮጵያ ካፌ — ክላሲ ምግች፣ ቡርር፣ ፒዛ፣ ፓስ፣ ጭማቂ፣ ቡና እና ጥ።",
    logo: "./assets/logo.svg",
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
    fontDisplay: "'Noto Sans Ethiopic', 'Kefa', 'Ebrima', 'Segoe UI', system-ui, sans-serif",
    fontBody: "'Noto Sans Ethiopic', 'Kefa', 'Ebrima', 'Segoe UI', system-ui, sans-serif",
  },

  locale: "en-ET",
  currency: "ETB",
  priceNote: "ዋጋዎች በኢትዮጵያ ር (ETB) ናቸው።",

  contact: {
    phone: "+2510000000",
    phoneHref: "+2510000000",
    whatsapp: "2510000000",
    whatsappMessage: "ሰላም ሙሺ! መን ልል እልጋለሁ።",
    email: "hello@musio09.example",
    address: "142 Grove Street, Portland, OR",
    mapsUrl: "https://maps.google.com/?q=142+Grove+Street+Portland+OR",
    instagram: "whos_mus",
    instagramUrl: "https://instagram.com/whos_mus",
    website: "",
  },

  timezone: "Africa/Addis_Ababa",
  hours: [
    { days: [1, 2, 3, 4, 5], open: "08:00", close: "22:00", label: "ሰኞ – ዓርብ", display: "08:00 – 22:00" },
    { days: [6, 0], open: "09:00", close: "23:00", label: "ቅዳሜ – እሑድ", display: "09:00 – 23:00" },
  ],

  features: {
    showPhotos: true,
    showSearch: true,
    showTableField: true,
    allowOrderNotes: true,
    showRating: true,
  },

  rating: {
    score: "4.9",
    label: "የተወደደ",
  },

  order: {
    minOrder: 0,
    pickupLabel: "ለምርባት / ንጠረዥ አዝዝ",
    whatsappIntro: "ሰላም ሙሺ! አዲስ አዝዝ:",
    emptyCartHint: "ጥቂት ምግብ ይጨምሩ፣ አዝንም በዋትስአፕ ይላኩ።",
  },

  categories: [
    { id: "breakfast", name: "ጠዋት ነርታ" },
    { id: "ethiopian", name: "የኢትዮጵያ አመልክቶ" },
    { id: "burgers", name: "ቡርጌርና ሳንዴዊች" },
    { id: "pizza", name: "ፒዛና ፓስ" },
    { id: "sides", name: "ሰይድስ" },
    { id: "drinks", name: "ማሽና ጭማ" },
    { id: "desserts", name: "ጥ" },
  ],

  items: [
    {
      id: "special-ful",
      category: "breakfast",
      name: "ስፔሻል ፈል",
      price: 180,
      image: "./assets/foods/special-ful.jpg",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "chechebsa",
      category: "breakfast",
      name: "ሻሻል",
      price: 220,
      image: "./assets/foods/chechebsa.jpg",
      tags: ["ethiopian", "veg"],
    },
    {
      id: "special-firfir",
      category: "breakfast",
      name: "ስፔሻል ፍርር",
      price: 220,
      image: "./assets/foods/special-firfir.jpg",
      tags: ["ethiopian", "popular"],
    },
    {
      id: "eggs-toast",
      category: "breakfast",
      name: "ኤንቁላልና ብራን",
      price: 180,
      image: "./assets/foods/eggs-toast.jpg",
      tags: ["popular"],
    },

    {
      id: "doro-wot",
      category: "ethiopian",
      name: "ዶሮ ",
      price: 480,
      image: "./assets/foods/doro-wot.jpg",
      tags: ["ethiopian", "popular"],
      featured: true,
    },
    {
      id: "special-tibs",
      category: "ethiopian",
      name: "ስፔሻል ብስ",
      price: 520,
      image: "./assets/foods/special-tibs.jpg",
      tags: ["ethiopian", "popular"],
    },
    {
      id: "special-kitfo",
      category: "ethiopian",
      name: "ስፔሻል ኪትፎ",
      price: 550,
      image: "./assets/foods/special-kitfo.jpg",
      tags: ["ethiopian"],
    },
    {
      id: "shiro",
      category: "ethiopian",
      name: "ሽሮ",
      price: 280,
      image: "./assets/foods/shiro.jpg",
      tags: ["ethiopian", "veg"],
    },
    {
      id: "beyaynet",
      category: "ethiopian",
      name: "በያይነት",
      price: 350,
      image: "./assets/foods/beyaynet.jpg",
      tags: ["ethiopian", "veg", "popular"],
      featured: true,
    },
    {
      id: "gomen",
      category: "ethiopian",
      name: "ጎሚን",
      price: 240,
      image: "./assets/foods/gomen.jpg",
      tags: ["ethiopian", "veg"],
    },

    {
      id: "classic-beef-burger",
      category: "burgers",
      name: "ኬሊሰ ቪፍ ቡርጌር",
      price: 420,
      image: "./assets/foods/classic-beef-burger.jpg",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "crispy-chicken-burger",
      category: "burgers",
      name: "ክሪስፒ ቻኪን ቡርጌር",
      price: 390,
      image: "./assets/foods/crispy-chicken-burger.jpg",
      tags: ["popular"],
    },
    {
      id: "double-cheeseburger",
      category: "burgers",
      name: "ድሉብ ዝ ቡርጌር",
      price: 520,
      image: "./assets/foods/double-cheeseburger.jpg",
      tags: ["popular"],
    },
    {
      id: "chicken-sandwich",
      category: "burgers",
      name: "ግሪል ቻኪን ንዴዊች",
      price: 360,
      image: "./assets/foods/grilled-chicken-sandwich.jpg",
      tags: [],
    },

    {
      id: "margherita",
      category: "pizza",
      name: "ማርገሪታ ፒዛ",
      price: 420,
      image: "./assets/foods/margherita.jpg",
      tags: ["veg", "popular"],
    },
    {
      id: "chicken-pizza",
      category: "pizza",
      name: "ቻኪን ፒዛ",
      price: 520,
      image: "./assets/foods/chicken-pizza.jpg",
      tags: ["popular"],
    },
    {
      id: "beef-special-pizza",
      category: "pizza",
      name: "ቪፍ ፔሻል ዛ",
      price: 560,
      image: "./assets/foods/beef-special-pizza.jpg",
      tags: ["popular"],
    },
    {
      id: "musio-special-pizza",
      category: "pizza",
      name: "ሙሺ ስፔል ፒዛ",
      price: 650,
      image: "./assets/foods/musio-special-pizza.jpg",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "creamy-chicken-pasta",
      category: "pizza",
      name: "ክሪሚ ቻኪን ፓስ",
      price: 450,
      image: "./assets/foods/creamy-chicken-pasta.jpg",
      tags: ["popular"],
    },

    {
      id: "crispy-fries",
      category: "sides",
      name: "ክሪስ ቁርስ",
      price: 150,
      image: "./assets/foods/crispy-fries.jpg",
      tags: ["veg"],
    },
    {
      id: "beef-sambusa",
      category: "sides",
      name: "ቪፍ ሳምቡሳ",
      price: 120,
      image: "./assets/foods/beef-sambusa.jpg",
      tags: ["popular"],
    },
    {
      id: "garden-salad",
      category: "sides",
      name: "ጋርድን ሴላድ",
      price: 220,
      image: "./assets/foods/garden-salad.jpg",
      tags: ["veg"],
    },

    {
      id: "ethiopian-buna",
      category: "drinks",
      name: "የኢትዮጵያ ቡና",
      price: 100,
      image: "./assets/foods/ethiopian-buna.jpg",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "macchiato",
      category: "drinks",
      name: "ማያቶ",
      price: 130,
      image: "./assets/foods/macchiato.jpg",
      tags: ["popular"],
    },
    {
      id: "ethiopian-tea",
      category: "drinks",
      name: "ሻይ",
      price: 80,
      image: "./assets/foods/ethiopian-tea.jpg",
      tags: [],
    },
    {
      id: "mango-juice",
      category: "drinks",
      name: "የማንጎ ጭማቂ",
      price: 180,
      image: "./assets/foods/mango-juice.jpg",
      tags: ["popular"],
    },
    {
      id: "avocado-juice",
      category: "drinks",
      name: "የአቮካ ጭማቂ",
      price: 200,
      image: "./assets/foods/avocado-juice.jpg",
      tags: ["popular"],
    },
    {
      id: "papaya-juice",
      category: "drinks",
      name: "የፓያ ጭማቂ",
      price: 180,
      image: "./assets/foods/papaya-juice.jpg",
      tags: [],
    },
    {
      id: "special-spris",
      category: "drinks",
      name: "ስፔሻል ፕሪስ",
      price: 230,
      image: "./assets/foods/special-spris.jpg",
      tags: ["popular"],
      featured: true,
    },
    {
      id: "soft-drink",
      category: "drinks",
      name: "ሶፍት ድሪንክ",
      price: 90,
      image: "./assets/foods/soft-drink.jpg",
      tags: [],
    },
    {
      id: "bottled-water",
      category: "drinks",
      name: "ውሃ",
      price: 50,
      image: "./assets/foods/bottled-water.jpg",
      tags: [],
    },

    {
      id: "cake-slice",
      category: "desserts",
      name: "ኬክ",
      price: 180,
      image: "./assets/foods/cake-slice.jpg",
      tags: ["popular"],
    },
    {
      id: "brownie",
      category: "desserts",
      name: "ብራውኒ",
      price: 160,
      image: "./assets/foods/brownie.jpg",
      tags: ["popular"],
    },
    {
      id: "fruit-salad",
      category: "desserts",
      name: "የፍራሬ ሴድ",
      price: 180,
      image: "./assets/foods/fruit-salad.jpg",
      tags: ["veg"],
    },
  ],
};
