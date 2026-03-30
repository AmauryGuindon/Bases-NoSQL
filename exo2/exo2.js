// ============================================================
// Exercice 2 — Filtres et Opérateurs
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 2.1 — Produit le plus cher
db.products.find(
  {},
  { name: 1, price: 1, _id: 0 }
).sort({ price: -1 }).limit(1);

// 2.1 — Produit le moins cher
db.products.find(
  {},
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 }).limit(1);

// 2.2 — Utilisateurs dont le prénom commence par "A" ou "E"
db.users.find(
  { first_name: { $in: [/^A/i, /^E/i] } },
  { first_name: 1, last_name: 1, city: 1, _id: 0 }
);

// 2.3 — Produits entre 200€ et 800€, triés par prix croissant
db.products.find(
  { price: { $gte: 200, $lte: 800 } },
  { name: 1, price: 1, category: 1, _id: 0 }
).sort({ price: 1 });

// 2.4 — Produits des catégories "Audio" ou "Smartphones"
db.products.find(
  { category: { $in: ["Audio", "Smartphones"] } }
);

// 2.5 — Utilisateurs qui ne sont pas en France
db.users.find(
  { country: { $ne: "France" } },
  { first_name: 1, last_name: 1, city: 1, country: 1, _id: 0 }
);

// 2.6 — Produits qui ont un champ "specs"
db.products.find(
  { specs: { $exists: true } },
  { name: 1, specs: 1, _id: 0 }
);

// 2.7 — Produits dont le nom contient "Pro" (insensible à la casse)
db.products.find(
  { name: { $regex: "Pro", $options: "i" } },
  { name: 1, price: 1, _id: 0 }
);

// 2.8 — Toutes les catégories distinctes
db.products.distinct("category");

// 2.9 — Commandes en statut "pending" ou "confirmed", triées par montant décroissant
db.orders.find(
  { status: { $in: ["pending", "confirmed"] } },
  { total_amount: 1, status: 1, _id: 0 }
).sort({ total_amount: -1 });

// 2.10 — Les 5 produits les plus chers disponibles
db.products.find(
  { is_available: true },
  { name: 1, price: 1, category: 1, _id: 0 }
).sort({ price: -1 }).limit(5);
