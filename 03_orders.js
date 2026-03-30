// ============================================================
// 📦 DATASET shop_mongo — Collection : orders
// ============================================================
// Les order_items sont imbriqués dans chaque commande (embedding)
// On dénormalise le product_name pour éviter un $lookup systématique
// ============================================================

use shop_mongo;
db.orders.drop();

db.orders.insertMany([
  // --- Bob : 3 commandes ---
  {
    _id: ObjectId("665a0003aabb000000000001"),
    user_id: ObjectId("665a0001aabb000000000002"),
    status: "delivered",
    total_amount: 2089.98,
    shipping_address: "12 rue de la Paix, 69001 Lyon",
    created_at: ISODate("2024-02-20T10:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000001"), product_name: "MacBook Pro 14\"", quantity: 1, unit_price: 1999.99 },
      { product_id: ObjectId("665a0002aabb000000000008"), product_name: "Logitech MX Master 3S", quantity: 1, unit_price: 89.99 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000002"),
    user_id: ObjectId("665a0001aabb000000000002"),
    status: "delivered",
    total_amount: 89.99,
    shipping_address: "12 rue de la Paix, 69001 Lyon",
    created_at: ISODate("2024-04-15T14:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000008"), product_name: "Logitech MX Master 3S", quantity: 1, unit_price: 89.99 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000003"),
    user_id: ObjectId("665a0001aabb000000000002"),
    status: "pending",
    total_amount: 1599.99,
    shipping_address: "12 rue de la Paix, 69001 Lyon",
    created_at: ISODate("2024-06-01T09:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000005"), product_name: "RTX 4090", quantity: 1, unit_price: 1599.99 }
    ]
  },

  // --- Charlie : 2 commandes ---
  {
    _id: ObjectId("665a0003aabb000000000004"),
    user_id: ObjectId("665a0001aabb000000000003"),
    status: "delivered",
    total_amount: 1199.00,
    shipping_address: "5 bd Longchamp, 13001 Marseille",
    created_at: ISODate("2024-03-05T11:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000b"), product_name: "iPhone 15 Pro", quantity: 1, unit_price: 1199.00 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000005"),
    user_id: ObjectId("665a0001aabb000000000003"),
    status: "shipped",
    total_amount: 429.98,
    shipping_address: "5 bd Longchamp, 13001 Marseille",
    created_at: ISODate("2024-05-20T16:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000f"), product_name: "AirPods Pro 2", quantity: 1, unit_price: 279.99 },
      { product_id: ObjectId("665a0002aabb000000000010"), product_name: "JBL Charge 5", quantity: 1, unit_price: 149.99 }
    ]
  },

  // --- Diana : 2 commandes ---
  {
    _id: ObjectId("665a0003aabb000000000006"),
    user_id: ObjectId("665a0001aabb000000000004"),
    status: "delivered",
    total_amount: 2279.98,
    shipping_address: "8 allée Jean Jaurès, 31000 Toulouse",
    created_at: ISODate("2024-03-15T09:30:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000001"), product_name: "MacBook Pro 14\"", quantity: 1, unit_price: 1999.99 },
      { product_id: ObjectId("665a0002aabb00000000000f"), product_name: "AirPods Pro 2", quantity: 1, unit_price: 279.99 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000007"),
    user_id: ObjectId("665a0001aabb000000000004"),
    status: "cancelled",
    total_amount: 499.99,
    shipping_address: "8 allée Jean Jaurès, 31000 Toulouse",
    created_at: ISODate("2024-04-01T10:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000011"), product_name: "PlayStation 5", quantity: 1, unit_price: 499.99 }
    ]
  },

  // --- Eve : 1 commande ---
  {
    _id: ObjectId("665a0003aabb000000000008"),
    user_id: ObjectId("665a0001aabb000000000005"),
    status: "confirmed",
    total_amount: 349.99,
    shipping_address: "22 cours de l Intendance, 33000 Bordeaux",
    created_at: ISODate("2024-05-10T13:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000e"), product_name: "Sony WH-1000XM5", quantity: 1, unit_price: 349.99 }
    ]
  },

  // --- Frank : 3 commandes ---
  {
    _id: ObjectId("665a0003aabb000000000009"),
    user_id: ObjectId("665a0001aabb000000000006"),
    status: "delivered",
    total_amount: 1549.00,
    shipping_address: "3 rue Crébillon, 44000 Nantes",
    created_at: ISODate("2024-02-28T08:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000002"), product_name: "ThinkPad X1 Carbon", quantity: 1, unit_price: 1549.00 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb00000000000a"),
    user_id: ObjectId("665a0001aabb000000000006"),
    status: "delivered",
    total_amount: 349.99,
    shipping_address: "3 rue Crébillon, 44000 Nantes",
    created_at: ISODate("2024-04-20T15:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000012"), product_name: "Nintendo Switch OLED", quantity: 1, unit_price: 349.99 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb00000000000b"),
    user_id: ObjectId("665a0001aabb000000000006"),
    status: "shipped",
    total_amount: 719.98,
    shipping_address: "3 rue Crébillon, 44000 Nantes",
    created_at: ISODate("2024-06-05T10:30:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000004"), product_name: "RTX 4070 Ti", quantity: 1, unit_price: 649.99 },
      { product_id: ObjectId("665a0002aabb000000000014"), product_name: "Manette PS5 DualSense", quantity: 1, unit_price: 69.99 }
    ]
  },

  // --- Grace : 1 commande ---
  {
    _id: ObjectId("665a0003aabb00000000000c"),
    user_id: ObjectId("665a0001aabb000000000007"),
    status: "delivered",
    total_amount: 1999.99,
    shipping_address: "15 place Kléber, 67000 Strasbourg",
    created_at: ISODate("2024-04-10T12:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000001"), product_name: "MacBook Pro 14\"", quantity: 1, unit_price: 1999.99 }
    ]
  },

  // --- Hugo : 2 commandes ---
  {
    _id: ObjectId("665a0003aabb00000000000d"),
    user_id: ObjectId("665a0001aabb000000000008"),
    status: "delivered",
    total_amount: 499.99,
    shipping_address: "7 rue Faidherbe, 59000 Lille",
    created_at: ISODate("2024-03-25T14:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000011"), product_name: "PlayStation 5", quantity: 1, unit_price: 499.99 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb00000000000e"),
    user_id: ObjectId("665a0001aabb000000000008"),
    status: "pending",
    total_amount: 2499.00,
    shipping_address: "7 rue Faidherbe, 59000 Lille",
    created_at: ISODate("2024-06-10T09:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000015"), product_name: "Canon EOS R6 Mark II", quantity: 1, unit_price: 2499.00 }
    ]
  },

  // --- Isabelle : 2 commandes ---
  {
    _id: ObjectId("665a0003aabb00000000000f"),
    user_id: ObjectId("665a0001aabb000000000009"),
    status: "delivered",
    total_amount: 1169.00,
    shipping_address: "10 Grand Place, 1000 Bruxelles",
    created_at: ISODate("2024-04-05T11:30:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000c"), product_name: "Samsung Galaxy S24 Ultra", quantity: 1, unit_price: 1169.00 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000010"),
    user_id: ObjectId("665a0001aabb000000000009"),
    status: "delivered",
    total_amount: 219.97,
    shipping_address: "10 Grand Place, 1000 Bruxelles",
    created_at: ISODate("2024-05-15T16:45:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000014"), product_name: "Manette PS5 DualSense", quantity: 2, unit_price: 69.99 },
      { product_id: ObjectId("665a0002aabb000000000018"), product_name: "Razer DeathAdder V3", quantity: 1, unit_price: 79.99 }
    ]
  },

  // --- Jules : 1 commande ---
  {
    _id: ObjectId("665a0003aabb000000000011"),
    user_id: ObjectId("665a0001aabb00000000000a"),
    status: "confirmed",
    total_amount: 899.00,
    shipping_address: "4 rue du Rhône, 1204 Genève",
    created_at: ISODate("2024-05-25T10:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000d"), product_name: "Google Pixel 8 Pro", quantity: 1, unit_price: 899.00 }
    ]
  },

  // --- Karim : 2 commandes ---
  {
    _id: ObjectId("665a0003aabb000000000012"),
    user_id: ObjectId("665a0001aabb00000000000b"),
    status: "delivered",
    total_amount: 2199.00,
    shipping_address: "25 avenue des Champs-Élysées, 75008 Paris",
    created_at: ISODate("2024-03-01T09:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb000000000003"), product_name: "Dell XPS 15", quantity: 1, unit_price: 2199.00 }
    ]
  },
  {
    _id: ObjectId("665a0003aabb000000000013"),
    user_id: ObjectId("665a0001aabb00000000000b"),
    status: "shipped",
    total_amount: 279.99,
    shipping_address: "25 avenue des Champs-Élysées, 75008 Paris",
    created_at: ISODate("2024-06-08T14:00:00Z"),
    items: [
      { product_id: ObjectId("665a0002aabb00000000000f"), product_name: "AirPods Pro 2", quantity: 1, unit_price: 279.99 }
    ]
  }
]);

print("✅ Collection orders : " + db.orders.countDocuments() + " documents insérés");
