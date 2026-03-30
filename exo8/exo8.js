// ============================================================
// Exercice 8 — Index et Performance
// Base de données : shop_mongo
// ============================================================

use("shop_mongo");

// 8.1 — explain() AVANT création d'index (COLLSCAN attendu)
db.products.find({ category: "Audio" }).explain("executionStats");
// → winningPlan.stage = "COLLSCAN" : MongoDB parcourt tous les documents
// → totalDocsExamined = nombre total de produits (scan complet)

// 8.2 — Création d'un index simple sur category, puis explain()
db.products.createIndex({ category: 1 });
db.products.find({ category: "Audio" }).explain("executionStats");
// → winningPlan.stage = "IXSCAN" : MongoDB utilise maintenant l'index
// → totalDocsExamined réduit au nombre de produits "Audio" uniquement

// 8.3 — Index composé category (asc) + price (desc)
db.products.createIndex({ category: 1, price: -1 });
db.products.find({ category: "Audio" }).sort({ price: -1 }).explain("executionStats");
// → L'index composé est utilisé pour le filtre ET le tri sans étape de sort supplémentaire

// 8.4 — Index unique sur email des users
db.users.createIndex({ email: 1 }, { unique: true });

// Tentative d'insertion avec un email déjà existant (doit échouer)
try {
  db.users.insertOne({
    first_name: "Test",
    last_name: "Doublon",
    email: "alice.martin@email.com" // email déjà présent en base
  });
} catch (e) {
  print("Erreur attendue : " + e.message);
  // → MongoServerError: E11000 duplicate key error
  // MongoDB rejette l'insertion car l'index unique interdit les doublons
}

// 8.5 — Lister tous les index de products, puis supprimer l'index simple sur category
db.products.getIndexes();
db.products.dropIndex({ category: 1 });
// L'index composé { category: 1, price: -1 } est conservé

// 8.6 — Index texte sur name et description
db.products.createIndex({ name: "text", description: "text" });

// Recherche plein texte du mot "bluetooth"
db.products.find(
  { $text: { $search: "bluetooth" } },
  { name: 1, description: 1, score: { $meta: "textScore" }, _id: 0 }
).sort({ score: { $meta: "textScore" } });
