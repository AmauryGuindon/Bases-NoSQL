# 📝 Exercice 5 — Agrégation (niveau 1)

> Tous les exercices utilisent `db.collection.aggregate([...])`.

---

### 5.1
Calculez le chiffre d'affaires total de la boutique (somme des `total_amount` des commandes livrées uniquement).

---

### 5.2
Affichez le nombre de produits par catégorie, trié par nombre décroissant. Affichez le nom de la catégorie et le nombre.

---

### 5.3
Affichez le prix moyen des produits par catégorie, arrondi à 2 décimales. Triez par prix moyen décroissant.

---

### 5.4
Comptez le nombre de commandes par statut (pending, confirmed, shipped, delivered, cancelled). Affichez aussi le montant total par statut.

---

### 5.5
Affichez les 5 tags les plus utilisés sur les produits, avec le nombre de produits pour chaque tag.

> 💡 Indice : utilisez `$unwind` pour dérouler le tableau de tags avant de grouper.

---

### 5.6
Calculez le panier moyen (montant moyen par commande) pour les commandes non annulées. Affichez un seul résultat.

---

### 5.7
Pour chaque catégorie, affichez le produit le moins cher et le produit le plus cher (prix min et prix max). Affichez le nom de la catégorie, le prix min et le prix max.