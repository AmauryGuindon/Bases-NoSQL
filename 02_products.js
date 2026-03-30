// ============================================================
// 📦 DATASET shop_mongo — Collection : products
// ============================================================
// Les tags sont imbriqués (embedding) au lieu d'une table pivot
// Les specs sont des objets imbriqués (pas de table séparée)
// ============================================================

use shop_mongo;
db.products.drop();

db.products.insertMany([
  {
    _id: ObjectId("665a0002aabb000000000001"),
    name: "MacBook Pro 14\"",
    description: "Apple M3 Pro, 18Go RAM, 512Go SSD",
    price: 1999.99,
    stock: 25,
    category: "Ordinateurs portables",
    is_available: true,
    tags: ["premium", "best-seller"],
    specs: { cpu: "Apple M3 Pro", ram: "18 Go", storage: "512 Go SSD" },
    created_at: ISODate("2024-01-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000002"),
    name: "ThinkPad X1 Carbon",
    description: "Intel i7, 16Go RAM, 512Go SSD",
    price: 1549.00,
    stock: 30,
    category: "Ordinateurs portables",
    is_available: true,
    tags: ["best-seller"],
    specs: { cpu: "Intel i7", ram: "16 Go", storage: "512 Go SSD" },
    created_at: ISODate("2024-01-20T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000003"),
    name: "Dell XPS 15",
    description: "Intel i9, 32Go RAM, 1To SSD",
    price: 2199.00,
    stock: 12,
    category: "Ordinateurs portables",
    is_available: true,
    tags: ["premium", "nouveauté"],
    specs: { cpu: "Intel i9", ram: "32 Go", storage: "1 To SSD" },
    created_at: ISODate("2024-02-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000004"),
    name: "RTX 4070 Ti",
    description: "NVIDIA GeForce RTX 4070 Ti 12Go",
    price: 649.99,
    stock: 40,
    category: "Composants PC",
    is_available: true,
    tags: ["best-seller", "promo"],
    specs: { gpu: "NVIDIA RTX 4070 Ti", vram: "12 Go" },
    created_at: ISODate("2024-02-10T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000005"),
    name: "RTX 4090",
    description: "NVIDIA GeForce RTX 4090 24Go",
    price: 1599.99,
    stock: 8,
    category: "Composants PC",
    is_available: true,
    tags: ["premium"],
    specs: { gpu: "NVIDIA RTX 4090", vram: "24 Go" },
    created_at: ISODate("2024-02-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000006"),
    name: "Samsung 990 Pro 2To",
    description: "SSD NVMe M.2, lecture 7450 Mo/s",
    price: 159.99,
    stock: 100,
    category: "Composants PC",
    is_available: true,
    tags: ["promo", "best-seller"],
    specs: { type: "NVMe M.2", capacity: "2 To", read_speed: "7450 Mo/s" },
    created_at: ISODate("2024-03-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000007"),
    name: "Corsair Vengeance 32Go",
    description: "DDR5 6000MHz, 2x16Go",
    price: 119.99,
    stock: 75,
    category: "Composants PC",
    is_available: true,
    tags: [],
    specs: { type: "DDR5", speed: "6000 MHz", capacity: "32 Go (2x16)" },
    created_at: ISODate("2024-03-05T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000008"),
    name: "Logitech MX Master 3S",
    description: "Souris sans fil ergonomique",
    price: 89.99,
    stock: 60,
    category: "Périphériques",
    is_available: true,
    tags: ["best-seller", "eco-friendly"],
    specs: { connectivity: "Bluetooth + USB", dpi: 8000 },
    created_at: ISODate("2024-03-10T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000009"),
    name: "Keychron Q1 Pro",
    description: "Clavier mécanique 75%, switches Gateron",
    price: 179.99,
    stock: 35,
    category: "Périphériques",
    is_available: true,
    tags: ["nouveauté", "exclusivité web"],
    specs: { layout: "75%", switches: "Gateron", connectivity: "Bluetooth + USB-C" },
    created_at: ISODate("2024-03-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000a"),
    name: "LG UltraGear 27\" 4K",
    description: "Moniteur gaming 144Hz, HDR600",
    price: 549.99,
    stock: 20,
    category: "Périphériques",
    is_available: true,
    tags: [],
    specs: { size: "27 pouces", resolution: "4K", refresh_rate: "144 Hz", hdr: "HDR600" },
    created_at: ISODate("2024-03-20T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000b"),
    name: "iPhone 15 Pro",
    description: "Apple A17 Pro, 256Go",
    price: 1199.00,
    stock: 50,
    category: "Smartphones",
    is_available: true,
    tags: ["best-seller", "premium"],
    specs: { cpu: "Apple A17 Pro", storage: "256 Go", screen: "6.1 pouces" },
    created_at: ISODate("2024-01-10T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000c"),
    name: "Samsung Galaxy S24 Ultra",
    description: "Snapdragon 8 Gen 3, 256Go",
    price: 1169.00,
    stock: 45,
    category: "Smartphones",
    is_available: true,
    tags: ["nouveauté", "premium"],
    specs: { cpu: "Snapdragon 8 Gen 3", storage: "256 Go", screen: "6.8 pouces" },
    created_at: ISODate("2024-02-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000d"),
    name: "Google Pixel 8 Pro",
    description: "Tensor G3, 128Go",
    price: 899.00,
    stock: 30,
    category: "Smartphones",
    is_available: true,
    tags: ["eco-friendly"],
    specs: { cpu: "Tensor G3", storage: "128 Go", screen: "6.7 pouces" },
    created_at: ISODate("2024-02-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000e"),
    name: "Sony WH-1000XM5",
    description: "Casque sans fil, réduction de bruit",
    price: 349.99,
    stock: 55,
    category: "Audio",
    is_available: true,
    tags: ["best-seller", "promo"],
    specs: { type: "Over-ear", anc: true, bluetooth: "5.3", autonomie_heures: 30 },
    created_at: ISODate("2024-01-20T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb00000000000f"),
    name: "AirPods Pro 2",
    description: "Apple, réduction de bruit adaptative",
    price: 279.99,
    stock: 80,
    category: "Audio",
    is_available: true,
    tags: ["best-seller"],
    specs: { type: "In-ear", anc: true, bluetooth: "5.3", autonomie_heures: 6, reduction_bruit: true },
    created_at: ISODate("2024-02-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000010"),
    name: "JBL Charge 5",
    description: "Enceinte Bluetooth portable, IP67",
    price: 149.99,
    stock: 65,
    category: "Audio",
    is_available: true,
    tags: [],
    specs: { type: "Enceinte portable", bluetooth: "5.1", waterproof: "IP67", autonomie_heures: 20 },
    created_at: ISODate("2024-03-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000011"),
    name: "PlayStation 5",
    description: "Console Sony, lecteur Blu-ray",
    price: 499.99,
    stock: 15,
    category: "Consoles",
    is_available: true,
    tags: ["best-seller"],
    specs: { cpu: "AMD Zen 2", gpu: "AMD RDNA 2", storage: "825 Go SSD" },
    created_at: ISODate("2024-01-05T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000012"),
    name: "Nintendo Switch OLED",
    description: "Console hybride, écran OLED 7\"",
    price: 349.99,
    stock: 40,
    category: "Consoles",
    is_available: true,
    tags: ["best-seller", "promo"],
    specs: { screen: "7 pouces OLED", storage: "64 Go", battery: "4.5-9h" },
    created_at: ISODate("2024-01-10T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000013"),
    name: "Xbox Series X",
    description: "Console Microsoft, 1To SSD",
    price: 499.99,
    stock: 20,
    category: "Consoles",
    is_available: true,
    tags: [],
    specs: { cpu: "AMD Zen 2", gpu: "AMD RDNA 2", storage: "1 To SSD" },
    created_at: ISODate("2024-01-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000014"),
    name: "Manette PS5 DualSense",
    description: "Manette sans fil, retour haptique",
    price: 69.99,
    stock: 90,
    category: "Accessoires gaming",
    is_available: true,
    tags: [],
    specs: { connectivity: "Bluetooth + USB-C", haptic: true },
    created_at: ISODate("2024-02-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000015"),
    name: "Canon EOS R6 Mark II",
    description: "Hybride plein format, 24.2MP",
    price: 2499.00,
    stock: 10,
    category: "Photo & Vidéo",
    is_available: true,
    tags: ["premium", "nouveauté"],
    specs: { sensor: "Plein format", megapixels: 24.2, video: "4K 60fps", stabilization: true },
    created_at: ISODate("2024-03-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000016"),
    name: "GoPro Hero 12",
    description: "Caméra action, 5.3K, stabilisation",
    price: 399.99,
    stock: 25,
    category: "Photo & Vidéo",
    is_available: true,
    tags: ["nouveauté"],
    specs: { video: "5.3K", stabilization: "HyperSmooth 6.0", waterproof: "10m" },
    created_at: ISODate("2024-03-15T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000017"),
    name: "Produit retiré",
    description: "Ce produit n est plus disponible",
    price: 99.99,
    stock: 0,
    category: "Composants PC",
    is_available: false,
    tags: [],
    created_at: ISODate("2024-01-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000018"),
    name: "Razer DeathAdder V3",
    description: "Souris gaming, capteur 30K DPI",
    price: 79.99,
    stock: 50,
    category: "Accessoires gaming",
    is_available: true,
    tags: ["nouveauté", "exclusivité web"],
    specs: { dpi: 30000, weight: "59g", connectivity: "USB" },
    created_at: ISODate("2024-04-01T10:00:00Z")
  },
  {
    _id: ObjectId("665a0002aabb000000000019"),
    name: "Asus ROG Strix G16",
    description: "Intel i7, RTX 4060, 16Go RAM",
    price: 1399.00,
    stock: 18,
    category: "Ordinateurs portables",
    is_available: true,
    tags: ["nouveauté"],
    specs: { cpu: "Intel i7", gpu: "RTX 4060", ram: "16 Go", storage: "512 Go SSD" },
    created_at: ISODate("2024-04-10T10:00:00Z")
  }
]);

print("✅ Collection products : " + db.products.countDocuments() + " documents insérés");
