// ============================================================
// Exercice 5 — Agrégation (niveau 1)
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 5.1 — Chiffre d'affaires total des commandes livrées
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: null, ca_total: { $sum: "$total_amount" } } },
  { $project: { _id: 0, ca_total: { $round: ["$ca_total", 2] } } }
]);

// 5.2 — Nombre de produits par catégorie, trié par nombre décroissant
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $project: { _id: 0, category: "$_id", count: 1 } }
]);

// 5.3 — Prix moyen par catégorie, arrondi à 2 décimales, trié décroissant
db.products.aggregate([
  { $group: { _id: "$category", avg_price: { $avg: "$price" } } },
  { $project: { _id: 0, category: "$_id", avg_price: { $round: ["$avg_price", 2] } } },
  { $sort: { avg_price: -1 } }
]);

// 5.4 — Nombre de commandes et montant total par statut
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 }, total: { $sum: "$total_amount" } } },
  { $project: { _id: 0, status: "$_id", count: 1, total: { $round: ["$total", 2] } } },
  { $sort: { count: -1 } }
]);

// 5.5 — Top 5 des tags les plus utilisés
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 },
  { $project: { _id: 0, tag: "$_id", count: 1 } }
]);

// 5.6 — Panier moyen (commandes non annulées)
db.orders.aggregate([
  { $match: { status: { $ne: "cancelled" } } },
  { $group: { _id: null, panier_moyen: { $avg: "$total_amount" } } },
  { $project: { _id: 0, panier_moyen: { $round: ["$panier_moyen", 2] } } }
]);

// 5.7 — Prix min et max par catégorie
db.products.aggregate([
  { $group: { _id: "$category", prix_min: { $min: "$price" }, prix_max: { $max: "$price" } } },
  { $project: { _id: 0, category: "$_id", prix_min: 1, prix_max: 1 } },
  { $sort: { category: 1 } }
]);
