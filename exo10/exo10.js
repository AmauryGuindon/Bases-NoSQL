// ============================================================
// Exercice 10 — Exercice Final Intégrateur
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// ============================================================
// PARTIE A — Rapport d'activité
// ============================================================

// A.1 — Catalogue Ordinateurs portables, trié par prix décroissant
db.products.find(
  { category: "Ordinateurs portables" },
  { name: 1, price: 1, stock: 1, _id: 0 }
).sort({ price: -1 });

// A.2 — Produits en rupture critique (stock < 15)
db.products.find(
  { stock: { $lt: 15 } },
  { name: 1, stock: 1, category: 1, _id: 0 }
).sort({ stock: 1 });

// A.3 — CA mensuel des commandes livrées
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

// A.4 — Top 3 meilleurs clients (commandes livrées)
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$user_id", total: { $sum: "$total_amount" }, nb_commandes: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 3 },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: {
    _id: 0,
    client: { $concat: ["$user.first_name", " ", "$user.last_name"] },
    nb_commandes: 1,
    total: { $round: ["$total", 2] }
  }}
]);

// A.5 — Popularité des tags (nb produits et prix moyen par tag)
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", nb_produits: { $sum: 1 }, avg_price: { $avg: "$price" } } },
  { $sort: { nb_produits: -1 } },
  { $project: { _id: 0, tag: "$_id", nb_produits: 1, avg_price: { $round: ["$avg_price", 2] } } }
]);

// A.6 — Note moyenne par produit (depuis reviews)
db.reviews.aggregate([
  { $group: { _id: "$product_id", avg_rating: { $avg: "$rating" }, nb_avis: { $sum: 1 } } },
  { $lookup: { from: "products", localField: "_id", foreignField: "_id", as: "product" } },
  { $unwind: "$product" },
  { $sort: { avg_rating: -1 } },
  { $project: {
    _id: 0,
    produit: "$product.name",
    avg_rating: { $round: ["$avg_rating", 1] },
    nb_avis: 1
  }}
]);

// ============================================================
// PARTIE B — Opérations de maintenance
// ============================================================

// B.1 — Réduction de 15% et ajout tag "soldes-été" sur les produits "promo"
db.products.updateMany(
  { tags: "promo" },
  {
    $mul: { price: 0.85 },
    $addToSet: { tags: "soldes-été" }
  }
);

// B.2 — Insertion du Sony WF-1000XM5
db.products.insertOne({
  name: "Sony WF-1000XM5",
  price: 299.99,
  stock: 40,
  category: "Audio",
  is_available: true,
  tags: ["nouveauté", "premium"],
  specs: { reduction_bruit: true, autonomie_heures: 8, bluetooth: "5.3" },
  created_at: new Date()
});

// B.3 — Index composé category + price et vérification
db.products.createIndex({ category: 1, price: -1 });
db.products.find({ category: "Audio" }).sort({ price: -1 }).explain("executionStats");

// ============================================================
// PARTIE C — Modélisation wishlist
// ============================================================

/*
  Choix : EMBEDDING de la wishlist dans le document user

  Justification :
  - La wishlist est propre à chaque utilisateur (relation 1-1 user/wishlist)
  - Lire la wishlist d'un user ne nécessite pas de jointure ($lookup)
  - La wishlist ne dépasse pas quelques dizaines de produits (pas de problème de taille de document)
  - On stocke les product_id pour référencer les produits (referencing partiel)
    afin de ne pas dupliquer les données produit qui changent souvent (prix, stock)

  Structure JSON proposée :
  {
    _id: ObjectId("..."),
    first_name: "Alice",
    last_name: "Martin",
    email: "alice.martin@email.com",
    wishlist: [
      {
        product_id: ObjectId("665a0002aabb000000000001"),
        added_at: ISODate("2024-06-01T10:00:00Z")
      },
      {
        product_id: ObjectId("665a0002aabb000000000005"),
        added_at: ISODate("2024-06-15T14:30:00Z")
      }
    ]
  }

  Pour récupérer la wishlist complète avec les détails produits :
  db.users.aggregate([
    { $match: { _id: ObjectId("...") } },
    { $unwind: "$wishlist" },
    { $lookup: {
      from: "products",
      localField: "wishlist.product_id",
      foreignField: "_id",
      as: "wishlist.product"
    }},
    { $unwind: "$wishlist.product" },
    { $group: {
      _id: "$_id",
      first_name: { $first: "$first_name" },
      wishlist: { $push: { product: "$wishlist.product.name", price: "$wishlist.product.price", added_at: "$wishlist.added_at" } }
    }}
  ])
*/
