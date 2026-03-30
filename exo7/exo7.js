// ============================================================
// Exercice 7 — Agrégation avancée
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 7.1 — CA mensuel des commandes livrées, trié par mois
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: {
    _id: { $month: "$created_at" },
    ca: { $sum: "$total_amount" },
    nb_commandes: { $sum: 1 }
  }},
  { $sort: { _id: 1 } },
  { $project: { _id: 0, mois: "$_id", ca: { $round: ["$ca", 2] }, nb_commandes: 1 } }
]);

// 7.2 — Segmentation produits par tranche de prix
db.products.aggregate([
  { $addFields: {
    segment: {
      $switch: {
        branches: [
          { case: { $lt: ["$price", 100] }, then: "Accessoire" },
          { case: { $and: [{ $gte: ["$price", 100] }, { $lte: ["$price", 499] }] }, then: "Milieu de gamme" },
          { case: { $and: [{ $gte: ["$price", 500] }, { $lte: ["$price", 999] }] }, then: "Haut de gamme" }
        ],
        default: "Premium"
      }
    }
  }},
  { $group: { _id: "$segment", count: { $sum: 1 }, avg_price: { $avg: "$price" } } },
  { $project: { _id: 0, segment: "$_id", count: 1, avg_price: { $round: ["$avg_price", 2] } } },
  { $sort: { avg_price: 1 } }
]);

// 7.3 — Analyse des tags : nb produits, prix moyen, prix max
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: {
    _id: "$tags",
    count: { $sum: 1 },
    avg_price: { $avg: "$price" },
    max_price: { $max: "$price" }
  }},
  { $sort: { count: -1 } },
  { $project: {
    _id: 0,
    tag: "$_id",
    count: 1,
    avg_price: { $round: ["$avg_price", 2] },
    max_price: 1
  }}
]);

// 7.4 — Clients fidèles (≥ 2 commandes livrées)
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$user_id", nb_commandes: { $sum: 1 }, total: { $sum: "$total_amount" } } },
  { $match: { nb_commandes: { $gte: 2 } } },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    nb_commandes: 1,
    total: { $round: ["$total", 2] }
  }},
  { $sort: { total: -1 } }
]);

// 7.5 — Évolution du stock : stock actuel, quantité vendue, stock initial théorique
db.orders.aggregate([
  { $match: { status: { $ne: "cancelled" } } },
  { $unwind: "$items" },
  { $group: { _id: "$items.product_name", qty_vendue: { $sum: "$items.quantity" } } },
  { $lookup: {
    from: "products",
    let: { pname: "$_id" },
    pipeline: [
      { $match: { $expr: { $eq: ["$name", "$$pname"] } } },
      { $project: { stock: 1, _id: 0 } }
    ],
    as: "product"
  }},
  { $unwind: "$product" },
  { $project: {
    _id: 0,
    name: "$_id",
    stock_actuel: "$product.stock",
    qty_vendue: 1,
    stock_initial: { $add: ["$product.stock", "$qty_vendue"] }
  }},
  { $sort: { qty_vendue: -1 } }
]);

// 7.6 — Tableau de bord avec $facet
db.orders.aggregate([
  { $facet: {
    ca_total: [
      { $match: { status: "delivered" } },
      { $group: { _id: null, ca: { $sum: "$total_amount" } } },
      { $project: { _id: 0, ca: { $round: ["$ca", 2] } } }
    ],
    par_statut: [
      { $group: { _id: "$status", count: { $sum: 1 } } },
      { $project: { _id: 0, status: "$_id", count: 1 } },
      { $sort: { count: -1 } }
    ],
    panier_moyen: [
      { $match: { status: { $ne: "cancelled" } } },
      { $group: { _id: null, avg: { $avg: "$total_amount" } } },
      { $project: { _id: 0, panier_moyen: { $round: ["$avg", 2] } } }
    ]
  }}
]);

// 7.7 — Recommandation : "Les clients qui ont acheté MacBook Pro 14" ont aussi acheté..."
db.orders.aggregate([
  // Trouver les commandes contenant le MacBook
  { $match: { "items.product_name": "MacBook Pro 14\"" } },
  // Récupérer les user_id concernés
  { $group: { _id: null, user_ids: { $addToSet: "$user_id" } } },
  // Chercher toutes les commandes de ces users et dérouler leurs articles
  { $lookup: {
    from: "orders",
    let: { users: "$user_ids" },
    pipeline: [
      { $match: { $expr: { $in: ["$user_id", "$$users"] } } },
      { $unwind: "$items" },
      { $match: { "items.product_name": { $ne: "MacBook Pro 14\"" } } },
      { $group: { _id: "$items.product_name", clients: { $addToSet: "$user_id" } } },
      { $project: { _id: 0, produit: "$_id", nb_clients: { $size: "$clients" } } },
      { $sort: { nb_clients: -1 } }
    ],
    as: "recommandations"
  }},
  { $unwind: "$recommandations" },
  { $project: { _id: 0, produit: "$recommandations.produit", nb_clients: "$recommandations.nb_clients" } }
]);
