// ============================================================
// Exercice 3 — Mises à jour avancées
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 3.1 — Décrémenter le stock de 1 pour "PlayStation 5"
db.products.updateOne(
  { name: "PlayStation 5" },
  { $inc: { stock: -1 } }
);

// 3.2 — Réduction de 10% sur tous les produits "Audio"
db.products.updateMany(
  { category: "Audio" },
  { $mul: { price: 0.9 } }
);

// 3.3 — Ajouter le tag "soldes-été" aux produits à moins de 100€
db.products.updateMany(
  { price: { $lt: 100 } },
  { $addToSet: { tags: "soldes-été" } }
);

// 3.4 — Supprimer le tag "promo" du produit "RTX 4070 Ti"
db.products.updateOne(
  { name: "RTX 4070 Ti" },
  { $pull: { tags: "promo" } }
);

// 3.5 — Ajouter updated_at aux produits "Ordinateurs portables"
db.products.updateMany(
  { category: "Ordinateurs portables" },
  { $set: { updated_at: new Date() } }
);

// 3.6 — Augmenter le stock de 20 pour les produits "best-seller"
db.products.updateMany(
  { tags: "best-seller" },
  { $inc: { stock: 20 } }
);

// 3.7 — Renommer is_available en disponible
db.products.updateMany(
  {},
  { $rename: { is_available: "disponible" } }
);

// 3.7 — Remettre le nom original is_available
db.products.updateMany(
  {},
  { $rename: { disponible: "is_available" } }
);
