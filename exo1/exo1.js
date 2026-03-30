// ============================================================
// Exercice 1 — CRUD de base
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 1.1 — Produits disponibles à moins de 200€, triés par prix croissant
db.products.find(
  { is_available: true, price: { $lt: 200 } },
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 });

// 1.2 — Nombre total de produits
db.products.countDocuments();

// 1.3 — Utilisateurs habitant à Paris
db.users.find(
  { city: "Paris" },
  { first_name: 1, last_name: 1, email: 1, _id: 0 }
);

// 1.4 — Produits de la catégorie "Composants PC", triés par prix décroissant
db.products.find(
  { category: "Composants PC" },
  { name: 1, price: 1, stock: 1, _id: 0 }
).sort({ price: -1 });

// 1.5 — Insertion d'un nouveau produit
db.products.insertOne({
  name: "Razer Kraken V3",
  price: 89.99,
  stock: 60,
  category: "Accessoires gaming",
  is_available: true,
  tags: ["nouveauté", "promo"],
  created_at: new Date()
});

// 1.6 — Modification du prix du Sony WH-1000XM5 et ajout du tag "soldes"
db.products.updateOne(
  { name: "Sony WH-1000XM5" },
  {
    $set: { price: 319.99 },
    $addToSet: { tags: "soldes" }
  }
);

// 1.7 — Suppression des produits non disponibles
db.products.deleteMany({ is_available: false });
