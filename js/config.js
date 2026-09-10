```js
/**
 * QR MENU — CLIENT CONFIG
 * Menu-first: Amharic dish names, no descriptions, local photos in assets/menu.
 * Edit prices here (ETB). Add a photo to assets/menu/ and point image at it.
 */

export const CONFIG = {
  restaurant: {
    name: "Musio Café & Kitchen",
    tagline: "የኢትዮጵያ ምግብ · ቡርገር · ፒዛ",
    logo: "./assets/logo.svg",
    cuisine: "Ethiopian / International",
  },

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
    radius: "16px",
    fontDisplay: '"Fraunces", "Noto Serif Ethiopic", "Times New Roman", serif',
    fontBody: '"Outfit", "Noto Sans Ethiopic", "Ebrima", "Segoe UI", sans-serif",
  },

  locale: "am-ET",
  currency: "ብር",
  priceNote: "ዋጋዎች በብር ናቸው።",

  contact: {
    phone: "+2510000000",
    phoneHref: "+2510000000",
    whatsapp: "2510000000",
    whatsappMessage: "Hi Musio! I’d like to order from the menu.",
    email: "hello@musio09.example",
    address: "ADAMA ETHIOPIA",
    mapsUrl: "https://maps.google.com/?q=Adama+Ethiopia",
    instagram: "whos_mus",
    instagramUrl: "https://instagram.com/whos_mus",
    website: "",
  },

  timezone: "Africa/Addis_Ababa",

  hours: [
    {
      days: [1, 2, 3, 4, 5],
      open: "08:00",
      close: "22:00",
      label: "Mon–Fri",
      display: "8:00 am – 10:00 pm",
    },
    {
      days: [6, 0],
      open: "09:00",
      close: "23:00",
      label: "Sat–Sun",
      display: "9:00 am – 11:00 pm",
    },
  ],

  features: {
    showPhotos: true,
    showSearch: true,
  },

  order: {
    whatsappIntro: "Hello Musio! New order:",
    emptyCartHint: "ምግብ ምረጡ",
  },

  tagLabels: {
    popular: "ተወዳጅ",
    new: "አዲስ",
  },

  categories: [
    { id: "breakfast", name: "ቁርስ" },
    { id: "ethiopian", name: "የኢትዮጵያ ምግቦች" },
    { id: "burgers", name: "በርገርና ሳንድዊች" },
    { id: "pizza", name: "ፒዛ" },
    { id: "sides", name: "ተጨማሪዎች" },
    { id: "drinks", name: "መጠጦች" },
    { id: "desserts", name: "ጣፋጭ" },
  ],

  items: [
    {
      id: "special-ful",
      category: "breakfast",
      name: "Special ፉል",
      price: 180,
      image: "./assets/menu/special-ful.jpg",
      tags: ["popular"],
    },

    {
      id: "chechebsa",
      category: "breakfast",
      name: "ጨጨብሳ",
      price: 220,
      image: "./assets/menu/chechebsa.jpg",
      tags: [],
    },

    {
      id: "special-firfir",
      category: "breakfast",
      name: "ልዩ ፍርፍር",
      price: 220,
      image: "./assets/menu/special-firfir.jpg",
      tags: ["popular"],
    },

    {
      id: "eggs-toast",
      category: "breakfast",
      name: "እንቁላልና ፍርፍር",
      price: 180,
      image: "./assets/menu/eggs-toast.jpg",
      tags: [],
    },

    {
      id: "doro-wot",
      category: "ethiopian",
      name: "ዶሮ ወጥ",
      price: 480,
      image: "./assets/menu/doro-wot.jpg",
      tags: ["popular"],
    },

    {
      id: "special-tibs",
      category: "ethiopian",
      name: "ጥብስ",
      price: 520,
      image: "./assets/menu/special-tibs.jpg",
      tags: ["popular"],
    },

    {
      id: "special-kitfo",
      category: "ethiopian",
      name: "ክትፎ",
      price: 550,
      image: "./assets/menu/special-kitfo.jpg",
      tags: [],
    },

    {
      id: "shiro",
      category: "ethiopian",
      name: "ሽሮ",
      price: 280,
      image: "./assets/menu/shiro.jpg",
      tags: [],
    },

    {
      id: "beyaynetu",
      category: "ethiopian",
      name: "በያይነት",
      price: 350,
      image: "./assets/menu/beyaynetu.jpg",
      tags: ["popular"],
    },

    {
      id: "gomen",
      category: "ethiopian",
      name: "ጎመን",
      price: 240,
      image: "./assets/menu/gomen.jpg",
      tags: [],
    },

    {
      id: "beef-burger",
      category: "burgers",
      name: "በርገር",
      price: 420,
      image: "./assets/menu/beef-burger.jpg",
      tags: ["popular"],
    },

    {
      id: "chicken-burger",
      category: "burgers",
      name: "Chicken በርገር",
      price: 390,
      image: "./assets/menu/chicken-burger.jpg",
      tags: [],
    },

    {
      id: "double-cheeseburger",
      category: "burgers",
      name: "ደብል ቺዝ በርገር",
      price: 520,
      image: "./assets/menu/double-cheeseburger.jpg",
      tags: [],
    },

    {
      id: "chicken-sandwich",
      category: "burgers",
      name: "የዶሮ ሳንድዊች",
      price: 360,
      image: "./assets/menu/chicken-sandwich.jpg",
      tags: [],
    },

    {
      id: "margherita",
      category: "pizza",
      name: "ማርጋሪታ ፒዛ",
      price: 420,
      image: "./assets/menu/margherita.jpg",
      tags: [],
    },

    {
      id: "chicken-pizza",
      category: "pizza",
      name: "የዶሮ ፒዛ",
      price: 520,
      image: "./assets/menu/chicken-pizza.jpg",
      tags: ["popular"],
    },

    {
      id: "beef-pizza",
      category: "pizza",
      name: "Special ፒዛ",
      price: 560,
      image: "./assets/menu/beef-pizza.jpg",
      tags: [],
    },

    {
      id: "chicken-pasta",
      category: "pizza",
      name: "የዶሮ ፓስታ",
      price: 450,
      image: "./assets/menu/chicken-pasta.jpg",
      tags: [],
    },

    {
      id: "fries",
      category: "sides",
      name: "ቺፕስ",
      price: 150,
      image: "./assets/menu/fries.jpg",
      tags: ["veg"],
    },

    {
      id: "sambusa",
      category: "sides",
      name: "ሳምቡሳ",
      price: 120,
      image: "./assets/menu/sambusa.jpg",
      tags: ["popular"],
    },

    {
      id: "salad",
      category: "sides",
      name: "ሰላጣ",
      price: 220,
      image: "./assets/menu/salad.jpg",
      tags: [],
    },

    {
      id: "buna",
      category: "drinks",
      name: "ቡና",
      price: 100,
      image: "./assets/menu/buna.jpg",
      tags: ["popular"],
    },

    {
      id: "macchiato",
      category: "drinks",
      name: "ማኪያቶ",
      price: 130,
      image: "./assets/menu/macchiato.jpg",
      tags: ["popular"],
    },

    {
      id: "tea",
      category: "drinks",
      name: "ሻይ",
      price: 80,
      image: "./assets/menu/tea.jpg",
      tags: [],
    },

    {
      id: "mango-juice",
      category: "drinks",
      name: "ማንጎ ጁስ",
      price: 180,
      image: "./assets/menu/mango-juice.jpg",
      tags: ["popular"],
    },

    {
      id: "avocado-juice",
      category: "drinks",
      name: "አቬካዶ ጁስ",
      price: 200,
      image: "./assets/menu/avocado-juice.jpg",
      tags: [],
    },

    {
      id: "papaya-juice",
      category: "drinks",
      name: "ፓፓያ ጁስ",
      price: 180,
      image: "./assets/menu/papaya-juice.jpg",
      tags: [],
    },

    {
      id: "spris",
      category: "drinks",
      name: "ስፕሪስ",
      price: 230,
      image: "./assets/menu/spris.jpg",
      tags: ["popular"],
    },

    {
      id: "soft-drink",
      category: "drinks",
      name: "ሶፍት ድሪንክ",
      price: 90,
      image: "./assets/menu/soft-drink.jpg",
      tags: [],
    },

    {
      id: "water",
      category: "drinks",
      name: "ውሃ",
      price: 50,
      image: "./assets/menu/water.jpg",
      tags: [],
    },

    {
      id: "cake",
      category: "desserts",
      name: "ኬክ",
      price: 180,
      image: "./assets/menu/cake.jpg",
      tags: [],
    },

    {
      id: "brownie",
      category: "desserts",
      name: "ብራውኒ",
      price: 160,
      image: "./assets/menu/brownie.jpg",
      tags: ["popular"],
    },

    {
      id: "fruit-salad",
      category: "desserts",
      name: "የፍራፍሬ ሰላጣ",
      price: 180,
      image: "./assets/menu/fruit-salad.jpg",
      tags: [],
    },
  ],
};
```
