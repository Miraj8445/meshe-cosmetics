/**
 * MESHE Brand & Commerce Configuration
 * 
 * Central configuration for MESHE Cosmetics.
 * Healing Theme: Warm Brown & Soft Pastel Palette
 */

// Primary WhatsApp or Order URL. Official phone number:
export const WHATSAPP_PHONE = "919971722802"; // 9971722802 with 91 country code
export const ORDER_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hi%20MESHE%2C%20I%20would%20like%20to%20place%20an%20order.`;

export const BRAND = {
  name: "MESHE",
  fullName: "Meshé Cosmetics",
  tagline: "Made for Every Smile",
  subTagline: "Five shades. One healing journey.",
  heroBadge: "5 Healing Shades • Matte Finish",
  heroSubtitle: "Colours inspired by real emotions, real stories, and the beautiful journey of finding yourself again.",
  instagramHandle: "@meshe.beauty",
  instagramUrl: "https://instagram.com",
  phone: "+91 99717 22802",
  phoneRaw: "9971722802",
  email: "care@meshebeauty.com",
  currency: "₹",
  individualPrice: 399,
  collectionPrice: 1596,
  collectionOriginalPrice: 1995,
  collectionDiscountPercent: 20,
};

/**
 * 5 Healing Shades in the Exact Healing Journey Sequence:
 * 1. Lost Love — The Beginning
 * 2. Broken Beauty — What Remains
 * 3. Pink Lies — The Truth We Learn
 * 4. After Love — Choosing Yourself
 * 5. Nevermine — Moving Forward
 */
export const PRODUCTS = [
  {
    id: "shade-lost-love",
    shadeNumber: "01",
    stageNumber: "01",
    name: "Lost Love",
    stage: "The Beginning",
    symbol: "❤️",
    category: "Healing Velvet Lip Cream",
    finish: "Comfort-Matte",
    tone: "Deep Ruby Crimson",
    tagline: "For the love you once had, but had to let go of.",
    story: "There are some people and moments we wish we could hold onto forever. Lost Love represents that first stage—the memories, the attachment, and the difficult acceptance that some things are meant to become a part of our past.",
    quote: "Some endings hurt because they once meant everything.",
    description: "A deep ruby crimson reflecting raw passion and poignant acceptance. Soft matte feel infused with healing care.",
    mood: "Memory & Acceptance",
    price: 399,
    originalPrice: 499,
    colorHex: "#933B3F",
    swatchRgb: "rgb(147, 59, 63)",
    image: "/images/shade-01.png",
    cardImage: "/images/shade-01-card.jpg",
    packshotImage: "/images/shade-01-packshot.png",
    badge: "The Beginning",
    undertone: "Universal Deep Ruby",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Nourishing Botanicals",
  },
  {
    id: "shade-broken-beauty",
    shadeNumber: "02",
    stageNumber: "02",
    name: "Broken Beauty",
    stage: "What Remains",
    symbol: "💔",
    category: "Healing Velvet Lip Cream",
    finish: "Comfort-Matte",
    tone: "Warm Terracotta Nude",
    tagline: "Because something breaking you doesn't mean it has to define you.",
    story: "Sometimes life doesn't leave us the way it found us. We change, we hurt, and we carry pieces of what happened with us. But somewhere in that brokenness, we discover a stronger version of ourselves.",
    quote: "You can be broken and still become beautiful again.",
    description: "An earthy, sun-kissed terracotta nude that effortlessly complements every undertone. Grounded, resilient, and honest.",
    mood: "Strength & Resilience",
    price: 399,
    originalPrice: 499,
    colorHex: "#945C5D",
    swatchRgb: "rgb(148, 92, 93)",
    image: "/images/shade-02.png",
    cardImage: "/images/shade-02-card.jpg",
    packshotImage: "/images/shade-02-packshot.png",
    badge: "What Remains",
    undertone: "Warm / Neutral Earth",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Nourishing Botanicals",
  },
  {
    id: "shade-pink-lies",
    shadeNumber: "03",
    stageNumber: "03",
    name: "Pink Lies",
    stage: "The Truth We Learn",
    symbol: "🤫",
    category: "Healing Velvet Lip Cream",
    finish: "Comfort-Matte",
    tone: "Vibrant Peachy Rose",
    tagline: "For the things we believed, the promises that weren't true, and the lessons they left behind.",
    story: "We don't always get the truth when we need it. Sometimes we believe words, trust people, and build hopes around things that don't turn out the way we imagined. Pink Lies represents the moment we stop blaming ourselves and start learning from what happened.",
    quote: "Not every lie destroys you. Some teach you what you deserve.",
    description: "A lively peachy rose bloom that brightens the complexion with youthful clarity, courage, and self-worth.",
    mood: "Clarity & Growth",
    price: 399,
    originalPrice: 499,
    colorHex: "#D4637A",
    swatchRgb: "rgb(212, 99, 122)",
    image: "/images/shade-03.png",
    cardImage: "/images/shade-03-card.jpg",
    packshotImage: "/images/shade-03-packshot.png",
    badge: "The Truth We Learn",
    undertone: "Warm Peachy Rose",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Nourishing Botanicals",
  },
  {
    id: "shade-after-love",
    shadeNumber: "04",
    stageNumber: "04",
    name: "After Love",
    stage: "Choosing Yourself",
    symbol: "✨",
    category: "Healing Velvet Lip Cream",
    finish: "Comfort-Matte",
    tone: "Soft Dusty Rose Nude",
    tagline: "For the life that begins after letting go.",
    story: "Healing slowly changes the way you see yourself. You start doing things for you again, finding your happiness in little moments and realizing that your life doesn't end where something else ended.",
    quote: "After love comes you. And sometimes, choosing yourself is the beginning of everything.",
    description: "A delicate, romantic dusty rose-pink crafted for gentle everyday grace and the quiet joy of rediscovering who you are.",
    mood: "Self-Love & Healing",
    price: 399,
    originalPrice: 499,
    colorHex: "#B17373",
    swatchRgb: "rgb(177, 115, 115)",
    image: "/images/shade-04.png",
    cardImage: "/images/shade-04-card.jpg",
    packshotImage: "/images/shade-04-packshot.png",
    badge: "Choosing Yourself",
    undertone: "Soft Dusty Rose",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Nourishing Botanicals",
  },
  {
    id: "shade-nevermine",
    shadeNumber: "05",
    stageNumber: "05",
    name: "Nevermine",
    stage: "Moving Forward",
    symbol: "🕊️",
    category: "Healing Velvet Lip Cream",
    finish: "Comfort-Matte",
    tone: "Velvet Rosewood Mauve",
    tagline: "“It happened. I learned from it. And now, I'm moving on.”",
    story: "This is the stage where the past doesn't have the same hold on you anymore. You remember, but it doesn't hurt the same. You understand that what happened was a chapter—not your entire story.",
    quote: "You don't have to forget what happened to move forward from it.",
    description: "A nuanced, sophisticated rosewood mauve with subtle berry undertones for an elevated, calm, confident presence.",
    mood: "Peace & Moving Forward",
    price: 399,
    originalPrice: 499,
    colorHex: "#AA606E",
    swatchRgb: "rgb(170, 96, 110)",
    image: "/images/shade-05.png",
    cardImage: "/images/shade-05-card.jpg",
    packshotImage: "/images/shade-05-packshot.png",
    badge: "Moving Forward",
    undertone: "Velvet Rosewood Mauve",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Nourishing Botanicals",
  },
];

export const SHADE_STORIES = [
  {
    order: 1,
    id: "lost-love",
    name: "LOST LOVE",
    stage: "The Beginning",
    symbol: "❤️",
    colorHex: "#933B3F",
    tagline: "For the love you once had, but had to let go of.",
    body: "There are some people and moments we wish we could hold onto forever. Lost Love represents that first stage—the memories, the attachment, and the difficult acceptance that some things are meant to become a part of our past.",
    quote: "Some endings hurt because they once meant everything.",
  },
  {
    order: 2,
    id: "broken-beauty",
    name: "BROKEN BEAUTY",
    stage: "What Remains",
    symbol: "💔",
    colorHex: "#945C5D",
    tagline: "Because something breaking you doesn't mean it has to define you.",
    body: "Sometimes life doesn't leave us the way it found us. We change, we hurt, and we carry pieces of what happened with us. But somewhere in that brokenness, we discover a stronger version of ourselves.",
    quote: "You can be broken and still become beautiful again.",
  },
  {
    order: 3,
    id: "pink-lies",
    name: "PINK LIES",
    stage: "The Truth We Learn",
    symbol: "🤫",
    colorHex: "#D4637A",
    tagline: "For the things we believed, the promises that weren't true, and the lessons they left behind.",
    body: "We don't always get the truth when we need it. Sometimes we believe words, trust people, and build hopes around things that don't turn out the way we imagined. Pink Lies represents the moment we stop blaming ourselves and start learning from what happened.",
    quote: "Not every lie destroys you. Some teach you what you deserve.",
  },
  {
    order: 4,
    id: "after-love",
    name: "AFTER LOVE",
    stage: "Choosing Yourself",
    symbol: "✨",
    colorHex: "#B17373",
    tagline: "For the life that begins after letting go.",
    body: "Healing slowly changes the way you see yourself. You start doing things for you again, finding your happiness in little moments and realizing that your life doesn't end where something else ended.",
    quote: "After love comes you. And sometimes, choosing yourself is the beginning of everything.",
  },
  {
    order: 5,
    id: "nevermine",
    name: "NEVERMINE",
    stage: "Moving Forward",
    symbol: "🕊️",
    colorHex: "#AA606E",
    tagline: "“It happened. I learned from it. And now, I'm moving on.”",
    body: "This is the stage where the past doesn't have the same hold on you anymore. You remember, but it doesn't hurt the same. You understand that what happened was a chapter—not your entire story.",
    quote: "You don't have to forget what happened to move forward from it.",
  },
];

export const JOURNEY_SUMMARY = {
  journeyLine: "Lost Love → Broken Beauty → Pink Lies → After Love → Nevermine",
  paragraph: "It's not just a collection of lipstick shades. It's a journey from losing something, to understanding it, healing through it, finding yourself again, and finally learning to smile.",
  tagline: "MESHE — Made for Every Smile.",
};

export const COLLECTION_OFFER = {
  title: "The Complete MESHE Collection",
  subtitle: "Five shades. One healing journey.",
  description: "Experience the complete emotional journey. All 5 healing matte shades enriched with Shea Butter, Jojoba Oil & Vitamin E, curated in one collectible set.",
  price: 1596,
  originalPrice: 1995,
  savings: 399,
  savingsPercent: "20% OFF",
  image: "/images/collection.png",
  lifestyleImage: "/images/collection-lifestyle.jpg",
  highlights: [
    "All 5 healing shades (Lost Love to Nevermine)",
    "Enriched with Shea Butter, Jojoba & Vitamin E",
    "Complimentary luxury soft pouch",
    "Free express delivery across India",
  ],
};

/**
 * Payment & Bank Details for Direct Bank / UPI Payment Option.
 * Official payment details for MESHE Cosmetics.
 */
export const BANK_PAYMENT_CONFIG = {
  title: "Direct Bank & UPI Payment",
  description: "Pay directly via Google Pay, PhonePe, Paytm, or any UPI app to our official UPI ID or phone number.",
  upiId: "khushibalgovind31@okhdfcbank",
  phone: "9971722802",
  phoneFormatted: "+91 99717 22802",
  accountHolder: "Khushi Balgovind",
  bankName: "HDFC Bank",
  accountNumber: "Available upon request via WhatsApp",
  ifscCode: "Available upon request via WhatsApp",
  accountType: "HDFC Bank Account",
  whatsappProofMessage: (itemName, price) =>
    `Hi MESHE! I have completed payment of ₹${price} for *${itemName}* via UPI (khushibalgovind31@okhdfcbank / 9971722802).\n\nAttached is my payment screenshot.\n\nShipping Details:\nName:\nAddress:\nPincode:\nPhone:`,
};

/**
 * Generate a direct WhatsApp checkout link for a single product or collection
 */
export function getWhatsAppOrderUrl(itemType = "collection", itemName = "The Complete MESHE Collection", price = 1596) {
  const message = `Hi MESHE! I'd like to order *${itemName}* for ₹${price}.\n\nPlease confirm availability and delivery timeline.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp proof confirmation link for direct bank/UPI payments
 */
export function getWhatsAppBankProofUrl(itemName = "MESHE Order", price = 399) {
  const message = `Hi MESHE! I am sharing my payment screenshot of ₹${price} for *${itemName}*.\n\nPaid to: khushibalgovind31@okhdfcbank (9971722802)\n\nMy Delivery Details:\nName:\nAddress:\nPincode:\nPhone:`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
