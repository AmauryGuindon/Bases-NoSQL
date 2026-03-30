// ============================================================
// Exercice 6 — Agrégation avec jointures ($lookup)
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 6.1 — Commandes livrées avec nom complet du client, triées par montant décroissant
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    total_amount: 1,
    created_at: 1
  }},
  { $sort: { total_amount: -1 } }
]);

// 6.2 — Montant total dépensé par client (commandes livrées), trié décroissant
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$user_id", total: { $sum: "$total_amount" } } },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    total: { $round: ["$total", 2] }
  }},
  { $sort: { total: -1 } }
]);

// 6.3 — Avis avec nom du produit et prénom de l'utilisateur
db.reviews.aggregate([
  { $lookup: { from: "products", localField: "product_id", foreignField: "_id", as: "product" } },
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $unwind: "$product" },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    product_name: "$product.name",
    user_first_name: "$user.first_name",
    rating: 1,
    comment: 1
  }}
]);

// 6.4 — Top 3 meilleurs clients (commandes livrées) avec rang
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$user_id", total: { $sum: "$total_amount" }, nb_commandes: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 3 },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $setWindowFields: {
    sortBy: { total: -1 },
    output: { rang: { $rank: {} } }
  }},
  { $project: {
    _id: 0,
    rang: 1,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    nb_commandes: 1,
    total: { $round: ["$total", 2] }
  }}
]);

// 6.5 — Par catégorie : nombre de produits et liste des noms
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 }, produits: { $push: "$name" } } },
  { $project: { _id: 0, category: "$_id", count: 1, produits: 1 } },
  { $sort: { category: 1 } }
]);

// 6.6 — 10 dernières commandes avec détail complet
db.orders.aggregate([
  { $sort: { created_at: -1 } },
  { $limit: 10 },
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    created_at: 1,
    status: 1,
    total_amount: 1,
    nb_articles: { $size: "$items" }
  }}
]);
