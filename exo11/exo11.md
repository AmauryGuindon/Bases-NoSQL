# 📝 Exercice 11 — MapReduce


**Base de données :** `shop_mongo`

> ⚠️ MapReduce est déprécié depuis MongoDB 5.0, mais le concept reste fondamental (Hadoop, Spark, JavaScript `.map()` / `.reduce()`). L'objectif est de comprendre le mécanisme, puis de comparer avec le pipeline d'agrégation.

---

## 🟢 Partie 1 — MapReduce basique (comptage et somme)

### 11.1 — Nombre de commandes par statut
Utilisez MapReduce pour compter le nombre de commandes par statut. Stockez le résultat en mémoire (`inline`).

---

### 11.2 — Nombre de produits par catégorie
Utilisez MapReduce pour compter le nombre de produits par catégorie. Ne comptez que les produits disponibles (`is_available: true`). Stockez le résultat dans une collection `produits_par_categorie`.

---

### 11.3 — Chiffre d'affaires par client
Utilisez MapReduce pour calculer le montant total dépensé par chaque client (`user_id`). Ne comptez que les commandes livrées (`status: "delivered"`). Résultat en `inline`.

---

## 🟡 Partie 2 — MapReduce avec finalize

### 11.4 — Prix moyen par catégorie
Utilisez MapReduce avec `finalize` pour calculer le prix moyen des produits par catégorie, arrondi à 2 décimales.

> 💡 Rappel : la fonction `reduce` peut être appelée plusieurs fois de manière incrémentale. On ne peut pas calculer la moyenne directement dans `reduce` — il faut émettre `{ total, count }` puis calculer la moyenne dans `finalize`.

---

### 11.5 — Note moyenne par produit
Utilisez MapReduce avec `finalize` sur la collection `reviews` pour calculer la note moyenne par produit (`product_id`). Affichez aussi le nombre d'avis. Arrondi à 2 décimales.

---

### 11.6 — Panier moyen par mois (2024)
Utilisez MapReduce pour calculer le panier moyen (montant moyen par commande) par mois pour l'année 2024. Ne comptez que les commandes non annulées. Utilisez `finalize` pour le calcul de la moyenne.

> 💡 Indice : dans la fonction `map`, extrayez le mois avec `this.created_at.getMonth() + 1` et l'année avec `this.created_at.getFullYear()`. Filtrez l'année 2024 avec l'option `query`.

---

## 🔴 Partie 3 — MapReduce avancé

### 11.7 — Fréquence des tags
Utilisez MapReduce pour compter combien de fois chaque tag est utilisé sur les produits. Triez le résultat par fréquence décroissante.

> 💡 Indice : dans la fonction `map`, parcourez le tableau `this.tags` avec une boucle et émettez une paire pour chaque tag.

---

### 11.8 — Chiffre d'affaires par client par mois
Utilisez MapReduce avec une clé composite `{ user_id, mois }` pour calculer le nombre de commandes et le montant total par client par mois. Commandes livrées uniquement.

---

### 11.9 — Stock vendu par produit
Utilisez MapReduce sur la collection `orders` pour calculer la quantité totale vendue par produit (parcourez le tableau `items` de chaque commande). Ne comptez que les commandes non annulées.

> 💡 Indice : dans `map`, parcourez `this.items` et émettez `(product_name, quantity)` pour chaque article.

---

## 🔄 Partie 4 — Réécriture en agrégation

### 11.10 — Réécrire les exercices 11.4 et 11.7 en pipeline d'agrégation
Pour chacun des deux exercices :
1. Réécrivez la requête avec `db.collection.aggregate([...])`
2. Comparez la lisibilité et le nombre de lignes

> L'objectif est de constater pourquoi le pipeline d'agrégation est préféré à MapReduce.