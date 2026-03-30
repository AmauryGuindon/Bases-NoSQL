// ============================================================
// Exercice 4 — Requêtes avancées
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 4.1 — Produits entre 200€ et 800€ OU avec le tag "promo"
db.products.find(
  {
    $or: [
      { price: { $gte: 200, $lte: 800 } },
      { tags: "promo" }
    ]
  },
  { name: 1, price: 1, tags: 1, _id: 0 }
);

// 4.2 — Produits avec au moins 2 tags
db.products.find(
  { "tags.1": { $exists: true } },
  { name: 1, tags: 1, _id: 0 }
);

// 4.3 — Produits avec les tags "premium" ET "best-seller"
db.products.find(
  { tags: { $all: ["premium", "best-seller"] } },
  { name: 1, tags: 1, _id: 0 }
);

// 4.4 — Produits avec specs.bluetooth = "5.3"
db.products.find(
  { "specs.bluetooth": "5.3" },
  { name: 1, specs: 1, _id: 0 }
);

// 4.5 — 2ème page (10 par page), triés par nom alphabétique
db.products.find(
  {},
  { name: 1, price: 1, _id: 0 }
).sort({ name: 1 }).skip(10).limit(10);

// 4.6 — Commandes livrées avec montant > 1000€, triées par montant décroissant
db.orders.find(
  { status: "delivered", total_amount: { $gt: 1000 } },
  { total_amount: 1, created_at: 1, _id: 0 }
).sort({ total_amount: -1 });

// 4.7 — Commandes contenant "MacBook Pro 14" dans les items
db.orders.find(
  { "items.product_name": "MacBook Pro 14\"" }
);

// 4.8 — Utilisateurs actifs hors France, triés par date d'inscription décroissante
db.users.find(
  { is_active: true, country: { $ne: "France" } },
  { first_name: 1, last_name: 1, country: 1, created_at: 1, _id: 0 }
).sort({ created_at: -1 });
