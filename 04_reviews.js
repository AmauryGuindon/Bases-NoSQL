// ============================================================
// 📦 DATASET shop_mongo — Collection : reviews
// ============================================================
// Les avis sont dans une collection séparée (referencing)
// car ils peuvent être très nombreux par produit
// On dénormalise product_name et user_name pour l'affichage
// ============================================================

use shop_mongo;
db.reviews.drop();

db.reviews.insertMany([
  // --- MacBook Pro 14" (3 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000002"),
    user_name: "Bob Dupont",
    product_id: ObjectId("665a0002aabb000000000001"),
    product_name: "MacBook Pro 14\"",
    rating: 5,
    comment: "Excellent laptop, rapide et silencieux. L écran est magnifique.",
    created_at: ISODate("2024-03-10T10:00:00Z")
  },
  {
    user_id: ObjectId("665a0001aabb000000000004"),
    user_name: "Diana Leroy",
    product_id: ObjectId("665a0002aabb000000000001"),
    product_name: "MacBook Pro 14\"",
    rating: 4,
    comment: "Très bon mais le prix est élevé. Le clavier est top.",
    created_at: ISODate("2024-04-20T14:00:00Z")
  },
  {
    user_id: ObjectId("665a0001aabb000000000007"),
    user_name: "Grace Laurent",
    product_id: ObjectId("665a0002aabb000000000001"),
    product_name: "MacBook Pro 14\"",
    rating: 5,
    comment: "Parfait pour le développement. Je recommande.",
    created_at: ISODate("2024-05-15T09:00:00Z")
  },

  // --- ThinkPad X1 Carbon (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000006"),
    user_name: "Frank Simon",
    product_id: ObjectId("665a0002aabb000000000002"),
    product_name: "ThinkPad X1 Carbon",
    rating: 4,
    comment: "Solide et fiable. Le clavier est le meilleur du marché.",
    created_at: ISODate("2024-04-01T11:00:00Z")
  },

  // --- Dell XPS 15 (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb00000000000b"),
    user_name: "Karim Benali",
    product_id: ObjectId("665a0002aabb000000000003"),
    product_name: "Dell XPS 15",
    rating: 5,
    comment: "Machine de guerre. Parfait pour le montage vidéo.",
    created_at: ISODate("2024-04-10T16:00:00Z")
  },

  // --- RTX 4070 Ti (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000006"),
    user_name: "Frank Simon",
    product_id: ObjectId("665a0002aabb000000000004"),
    product_name: "RTX 4070 Ti",
    rating: 4,
    comment: "Excellent rapport qualité/prix pour du 1440p.",
    created_at: ISODate("2024-06-10T10:00:00Z")
  },

  // --- Logitech MX Master 3S (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000002"),
    user_name: "Bob Dupont",
    product_id: ObjectId("665a0002aabb000000000008"),
    product_name: "Logitech MX Master 3S",
    rating: 5,
    comment: "La meilleure souris pour travailler. Ergonomie parfaite.",
    created_at: ISODate("2024-05-01T10:00:00Z")
  },

  // --- Keychron Q1 Pro (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000007"),
    user_name: "Grace Laurent",
    product_id: ObjectId("665a0002aabb000000000009"),
    product_name: "Keychron Q1 Pro",
    rating: 4,
    comment: "Clavier solide et agréable. Le son des switches est satisfaisant.",
    created_at: ISODate("2024-06-01T15:00:00Z")
  },

  // --- iPhone 15 Pro (2 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000003"),
    user_name: "Charlie Durand",
    product_id: ObjectId("665a0002aabb00000000000b"),
    product_name: "iPhone 15 Pro",
    rating: 4,
    comment: "Très bon téléphone, l appareil photo est incroyable.",
    created_at: ISODate("2024-04-15T13:00:00Z")
  },
  {
    user_id: ObjectId("665a0001aabb00000000000b"),
    user_name: "Karim Benali",
    product_id: ObjectId("665a0002aabb00000000000b"),
    product_name: "iPhone 15 Pro",
    rating: 3,
    comment: "Bon téléphone mais pas de grande évolution par rapport au 14 Pro.",
    created_at: ISODate("2024-05-20T10:00:00Z")
  },

  // --- Samsung Galaxy S24 Ultra (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000009"),
    user_name: "Isabelle Garcia",
    product_id: ObjectId("665a0002aabb00000000000c"),
    product_name: "Samsung Galaxy S24 Ultra",
    rating: 5,
    comment: "Le meilleur smartphone Android. L IA est bluffante.",
    created_at: ISODate("2024-05-01T15:00:00Z")
  },

  // --- Google Pixel 8 Pro (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb00000000000a"),
    user_name: "Jules Petit",
    product_id: ObjectId("665a0002aabb00000000000d"),
    product_name: "Google Pixel 8 Pro",
    rating: 4,
    comment: "Photos exceptionnelles. L intégration Google est parfaite.",
    created_at: ISODate("2024-06-05T11:00:00Z")
  },

  // --- Sony WH-1000XM5 (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000005"),
    user_name: "Eve Moreau",
    product_id: ObjectId("665a0002aabb00000000000e"),
    product_name: "Sony WH-1000XM5",
    rating: 5,
    comment: "La réduction de bruit est incroyable. Très confortable.",
    created_at: ISODate("2024-06-01T09:00:00Z")
  },

  // --- AirPods Pro 2 (2 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000003"),
    user_name: "Charlie Durand",
    product_id: ObjectId("665a0002aabb00000000000f"),
    product_name: "AirPods Pro 2",
    rating: 4,
    comment: "Très bonne qualité sonore. L audio spatial est top.",
    created_at: ISODate("2024-06-10T14:00:00Z")
  },
  {
    user_id: ObjectId("665a0001aabb000000000004"),
    user_name: "Diana Leroy",
    product_id: ObjectId("665a0002aabb00000000000f"),
    product_name: "AirPods Pro 2",
    rating: 5,
    comment: "Indispensable avec un iPhone. Réduction de bruit au top.",
    created_at: ISODate("2024-04-25T10:00:00Z")
  },

  // --- JBL Charge 5 (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000005"),
    user_name: "Eve Moreau",
    product_id: ObjectId("665a0002aabb000000000010"),
    product_name: "JBL Charge 5",
    rating: 3,
    comment: "Bon son mais un peu lourd pour le transport.",
    created_at: ISODate("2024-06-15T16:00:00Z")
  },

  // --- PlayStation 5 (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000008"),
    user_name: "Hugo Michel",
    product_id: ObjectId("665a0002aabb000000000011"),
    product_name: "PlayStation 5",
    rating: 5,
    comment: "La meilleure console de cette génération.",
    created_at: ISODate("2024-04-20T18:00:00Z")
  },

  // --- Nintendo Switch OLED (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000006"),
    user_name: "Frank Simon",
    product_id: ObjectId("665a0002aabb000000000012"),
    product_name: "Nintendo Switch OLED",
    rating: 4,
    comment: "Parfait pour jouer en famille. L écran OLED est superbe.",
    created_at: ISODate("2024-05-10T12:00:00Z")
  },

  // --- Manette PS5 DualSense (2 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000008"),
    user_name: "Hugo Michel",
    product_id: ObjectId("665a0002aabb000000000014"),
    product_name: "Manette PS5 DualSense",
    rating: 5,
    comment: "Le retour haptique change tout. Meilleure manette du marché.",
    created_at: ISODate("2024-05-01T10:00:00Z")
  },
  {
    user_id: ObjectId("665a0001aabb000000000009"),
    user_name: "Isabelle Garcia",
    product_id: ObjectId("665a0002aabb000000000014"),
    product_name: "Manette PS5 DualSense",
    rating: 4,
    comment: "Très bonne manette, mais l autonomie pourrait être meilleure.",
    created_at: ISODate("2024-06-01T14:00:00Z")
  },

  // --- Canon EOS R6 Mark II (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000008"),
    user_name: "Hugo Michel",
    product_id: ObjectId("665a0002aabb000000000015"),
    product_name: "Canon EOS R6 Mark II",
    rating: 4,
    comment: "Superbe appareil. L autofocus est impressionnant.",
    created_at: ISODate("2024-06-15T09:00:00Z")
  },

  // --- Razer DeathAdder V3 (1 avis) ---
  {
    user_id: ObjectId("665a0001aabb000000000009"),
    user_name: "Isabelle Garcia",
    product_id: ObjectId("665a0002aabb000000000018"),
    product_name: "Razer DeathAdder V3",
    rating: 5,
    comment: "Légère et précise. Parfaite pour le FPS.",
    created_at: ISODate("2024-06-10T11:00:00Z")
  }
]);

print("✅ Collection reviews : " + db.reviews.countDocuments() + " documents insérés");
