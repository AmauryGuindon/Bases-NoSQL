// ============================================================
// Exercice 11 — MapReduce
// Base de données : shop_mongo
// ⚠️ MapReduce est déprécié depuis MongoDB 5.0
// ============================================================

use("shop_mongo");

// ============================================================
// PARTIE 1 — MapReduce basique
// ============================================================

// 11.1 — Nombre de commandes par statut (inline)
db.orders.mapReduce(
  function() { emit(this.status, 1); },
  function(key, values) { return Array.sum(values); },
  { out: { inline: 1 } }
);

// 11.2 — Nombre de produits disponibles par catégorie → collection produits_par_categorie
db.products.mapReduce(
  function() { emit(this.category, 1); },
  function(key, values) { return Array.sum(values); },
  {
    query: { is_available: true },
    out: "produits_par_categorie"
  }
);

// 11.3 — CA total par client (commandes livrées uniquement, inline)
db.orders.mapReduce(
  function() { emit(this.user_id, this.total_amount); },
  function(key, values) { return Array.sum(values); },
  {
    query: { status: "delivered" },
    out: { inline: 1 }
  }
);

// ============================================================
// PARTIE 2 — MapReduce avec finalize
// ============================================================

// 11.4 — Prix moyen par catégorie (arrondi à 2 décimales)
// La moyenne ne peut pas être calculée directement dans reduce
// car reduce peut être appelé plusieurs fois de façon incrémentale.
// On accumule { total, count } dans reduce, puis on divise dans finalize.
db.products.mapReduce(
  function() {
    emit(this.category, { total: this.price, count: 1 });
  },
  function(key, values) {
    var result = { total: 0, count: 0 };
    values.forEach(function(v) {
      result.total += v.total;
      result.count += v.count;
    });
    return result;
  },
  {
    out: { inline: 1 },
    finalize: function(key, value) {
      value.avg = Math.round((value.total / value.count) * 100) / 100;
      return value;
    }
  }
);

// 11.5 — Note moyenne par produit (reviews), arrondie à 2 décimales
db.reviews.mapReduce(
  function() {
    emit(this.product_id, { total: this.rating, count: 1 });
  },
  function(key, values) {
    var result = { total: 0, count: 0 };
    values.forEach(function(v) {
      result.total += v.total;
      result.count += v.count;
    });
    return result;
  },
  {
    out: { inline: 1 },
    finalize: function(key, value) {
      value.avg = Math.round((value.total / value.count) * 100) / 100;
      return value;
    }
  }
);

// 11.6 — Panier moyen par mois pour 2024 (commandes non annulées)
db.orders.mapReduce(
  function() {
    var mois = this.created_at.getMonth() + 1;
    emit(mois, { total: this.total_amount, count: 1 });
  },
  function(key, values) {
    var result = { total: 0, count: 0 };
    values.forEach(function(v) {
      result.total += v.total;
      result.count += v.count;
    });
    return result;
  },
  {
    query: {
      status: { $ne: "cancelled" },
      created_at: { $gte: new Date("2024-01-01"), $lt: new Date("2025-01-01") }
    },
    out: { inline: 1 },
    finalize: function(key, value) {
      value.panier_moyen = Math.round((value.total / value.count) * 100) / 100;
      return value;
    }
  }
);

// ============================================================
// PARTIE 3 — MapReduce avancé
// ============================================================

// 11.7 — Fréquence des tags (un emit par tag dans le tableau)
db.products.mapReduce(
  function() {
    this.tags.forEach(function(tag) {
      emit(tag, 1);
    });
  },
  function(key, values) { return Array.sum(values); },
  { out: "tags_frequence" }
);
// Afficher trié par fréquence décroissante
db.tags_frequence.find().sort({ value: -1 });

// 11.8 — CA par client par mois (clé composite, commandes livrées)
db.orders.mapReduce(
  function() {
    var key = {
      user_id: this.user_id.toString(),
      mois: this.created_at.getMonth() + 1
    };
    emit(key, { count: 1, total: this.total_amount });
  },
  function(key, values) {
    var result = { count: 0, total: 0 };
    values.forEach(function(v) {
      result.count += v.count;
      result.total += v.total;
    });
    return result;
  },
  {
    query: { status: "delivered" },
    out: { inline: 1 }
  }
);

// 11.9 — Quantité totale vendue par produit (parcours du tableau items)
db.orders.mapReduce(
  function() {
    this.items.forEach(function(item) {
      emit(item.product_name, item.quantity);
    });
  },
  function(key, values) { return Array.sum(values); },
  {
    query: { status: { $ne: "cancelled" } },
    out: { inline: 1 }
  }
);

// ============================================================
// PARTIE 4 — Réécriture en pipeline d'agrégation
// ============================================================

// 11.10a — Réécriture de 11.4 (prix moyen par catégorie)
// MapReduce : 3 fonctions + finalize = verbeux et difficile à lire
// Agrégation : pipeline déclaratif, plus lisible, plus performant
db.products.aggregate([
  { $group: { _id: "$category", avg: { $avg: "$price" }, count: { $sum: 1 } } },
  { $project: { _id: 0, category: "$_id", avg: { $round: ["$avg", 2] }, count: 1 } },
  { $sort: { avg: -1 } }
]);

// 11.10b — Réécriture de 11.7 (fréquence des tags)
// MapReduce : boucle forEach dans map + reduce + tri séparé
// Agrégation : $unwind + $group + $sort en une seule commande
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $project: { _id: 0, tag: "$_id", count: 1 } }
]);

// Conclusion : le pipeline d'agrégation est plus concis, plus lisible,
// optimisé nativement par MongoDB, et supporte le streaming.
// MapReduce reste utile pour comprendre les concepts de traitement distribué
// (Hadoop, Spark) mais est déprécié pour un usage MongoDB en production.
