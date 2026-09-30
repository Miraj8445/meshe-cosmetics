/**
 * MESHE Brand & Commerce Configuration
 * 
 * Edit this single file to update prices, WhatsApp order link, phone numbers,
 * shade metadata, or product images across the entire website.
 */

// Primary WhatsApp or Order URL. Update with your actual WhatsApp phone number:
export const WHATSAPP_PHONE = "919876543210"; // Country code + 10 digits without '+'
export const ORDER_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hi%20MESHE%2C%20I%20would%20like%20to%20place%20an%20order.`;

export const BRAND = {
  name: "MESHE",
  fullName: "Meshé Cosmetics",
  tagline: "Made for Every Smile",
  subTagline: "Five shades. One signature smile.",
  instagramHandle: "@meshe.beauty",
  instagramUrl: "https://instagram.com",
  email: "care@meshebeauty.com",
  currency: "₹",
  individualPrice: 399,
  collectionPrice: 1596,
  collectionOriginalPrice: 1995,
  collectionDiscountPercent: 20,
};

export const PRODUCTS = [
  {
    id: "shade-01",
    shadeNumber: "01",
    name: "Broken Beauty",
    category: "Velvet Liquid Lipstick",
    finish: "Satin-Matte",
    tone: "Warm Terracotta Nude",
    description: "An earthy, sun-kissed terracotta nude that effortlessly complements every undertone from day to midnight.",
    mood: "Understated Confidence",
    price: 399,
    originalPrice: 499,
    colorHex: "#945C5D",
    swatchRgb: "rgb(148, 92, 93)",
    image: "/images/shade-01.png",
    cardImage: "/images/shade-01-card.jpg",
    badge: "Bestseller",
    undertone: "Warm / Neutral",
    ingredients: "Vitamin E, Jojoba Seed Oil, Shea Butter, Vegan Pigments",
  },
  {
    id: "shade-02",
    shadeNumber: "02",
    name: "After Love",
    category: "Velvet Liquid Lipstick",
    finish: "Satin-Matte",
    tone: "Soft Dusty Blush",
    description: "A romantic, delicate dusty rose-pink designed for an effortless my-lips-but-better daytime glow.",
    mood: "Gentle Romance",
    price: 399,
    originalPrice: 499,
    colorHex: "#B17373",
    swatchRgb: "rgb(177, 115, 115)",
    image: "/images/shade-02.png",
    cardImage: "/images/shade-02-card.jpg",
    badge: "Everyday Staple",
    undertone: "Neutral / Cool",
    ingredients: "Vitamin E, Rosehip Oil, Argan Kernel Oil, Botanical Extracts",
  },
  {
    id: "shade-03",
    shadeNumber: "03",
    name: "Nevermine",
    category: "Velvet Liquid Lipstick",
    finish: "Satin-Matte",
    tone: "Velvet Rosewood Mauve",
    description: "A nuanced, sophisticated rosewood mauve with subtle berry undertones for an elevated editorial look.",
    mood: "Quiet Mystery",
    price: 399,
    originalPrice: 499,
    colorHex: "#AA606E",
    swatchRgb: "rgb(170, 96, 110)",
    image: "/images/shade-03.png",
    cardImage: "/images/shade-03-card.jpg",
    badge: "Editor's Choice",
    undertone: "Cool / Rose",
    ingredients: "Vitamin E, Marula Oil, Sweet Almond Oil, Vegan Waxes",
  },
  {
    id: "shade-04",
    shadeNumber: "04",
    name: "Pink Lies",
    category: "Velvet Liquid Lipstick",
    finish: "Satin-Matte",
    tone: "Vibrant Peachy Coral",
    description: "A playful, vibrant coral bloom that instantly illuminates the face and brings youthful energy to any smile.",
    mood: "Playful Radiance",
    price: 399,
    originalPrice: 499,
    colorHex: "#D4637A",
    swatchRgb: "rgb(212, 99, 122)",
    image: "/images/shade-04.png",
    cardImage: "/images/shade-04-card.jpg",
    badge: "Summer Favorite",
    undertone: "Warm / Peachy",
    ingredients: "Vitamin E, Camellia Seed Oil, Jojoba Oil, Lightweight Esters",
  },
  {
    id: "shade-05",
    shadeNumber: "05",
    name: "Lost Love",
    category: "Velvet Liquid Lipstick",
    finish: "Satin-Matte",
    tone: "Deep Ruby Romance",
    description: "An unapologetic, commanding deep ruby crimson that delivers instant glamour and dramatic timeless power.",
    mood: "Fierce Elegance",
    price: 399,
    originalPrice: 499,
    colorHex: "#933B3F",
    swatchRgb: "rgb(147, 59, 63)",
    image: "/images/shade-05.png",
    cardImage: "/images/shade-05-card.jpg",
    badge: "Statement Red",
    undertone: "Universal Deep Red",
    ingredients: "Vitamin E, Pomegranate Seed Extract, Squalane, Velvet Polymers",
  },
];

export const COLLECTION_OFFER = {
  title: "The Complete MESHE Collection",
  subtitle: "Five shades. One complete collection.",
  description: "Experience every mood of MESHE. All 5 signature velvet matte shades curated in one collectible luxury set.",
  price: 1596,
  originalPrice: 1995,
  savings: 399,
  savingsPercent: "20% OFF",
  image: "/images/collection.png",
  lifestyleImage: "/images/collection-lifestyle.jpg",
  highlights: [
    "All 5 full-size lipstick shades",
    "Complimentary luxury velvet pouch",
    "Free express delivery across India",
    "Curated gift-ready packaging",
  ],
};

/**
 * Generate a direct WhatsApp checkout link for a single product or collection
 */
export function getWhatsAppOrderUrl(itemType = "collection", itemName = "The Complete MESHE Collection", price = 1596) {
  const message = `Hi MESHE! I'd like to order *${itemName}* for ₹${price}.\n\nPlease share payment details and delivery timeline.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
