# 📝 Exercice 10 — Exercice Final Intégrateur

---

## 🎯 Contexte

Vous êtes développeur chez ShopE89. Le directeur vous demande de produire un rapport complet sur l'activité de la boutique et d'effectuer plusieurs opérations de maintenance.

---

## Partie A — Rapport d'activité (requêtes d'analyse)

### A.1
Affichez le catalogue complet des produits de la catégorie "Ordinateurs portables" : nom, prix, stock, triés par prix décroissant.

### A.2
Identifiez les produits en rupture critique : stock inférieur à 15 unités. Affichez le nom, le stock et la catégorie, triés par stock croissant.

### A.3
Calculez le chiffre d'affaires mensuel pour les commandes livrées. Affichez le numéro du mois, le CA et le nombre de commandes.

### A.4
Établissez le classement des 3 meilleurs clients par montant total dépensé (commandes livrées). Affichez le nom complet, le nombre de commandes et le montant total.

### A.5
Analysez la popularité des tags : pour chaque tag, affichez le nombre de produits et le prix moyen. Triez par popularité décroissante.

### A.6
Calculez la note moyenne de chaque produit qui a reçu des avis. Affichez le nom du produit, la note moyenne (arrondie à 1 décimale) et le nombre d'avis. Triez par note décroissante.

---

## Partie B — Opérations de maintenance

### B.1
Les soldes d'été arrivent. Appliquez une réduction de 15% sur tous les produits qui ont le tag "promo". Ajoutez-leur aussi le tag "soldes-été".

### B.2
Insérez un nouveau produit :
- Nom : "Sony WF-1000XM5"
- Prix : 299.99
- Stock : 40
- Catégorie : "Audio"
- Disponible : true
- Tags : ["nouveauté", "premium"]
- Specs : { reduction_bruit: true, autonomie_heures: 8, bluetooth: "5.3" }

### B.3
Créez un index composé sur `category` (croissant) et `price` (décroissant) pour la collection `products`. Vérifiez avec `explain()` qu'il est utilisé.

---

## Partie C — Question de modélisation

### C.1
Le directeur veut ajouter un système de **liste de souhaits** (wishlist). Chaque utilisateur peut ajouter des produits à sa wishlist.

Proposez une modélisation MongoDB. Justifiez votre choix entre embedding et referencing. Montrez la structure JSON du document.

---

## Partie D — PHP

### D.1
Écrivez un script PHP qui :
1. Se connecte à MongoDB
2. Affiche les 5 produits les plus chers (nom et prix)
3. Affiche le chiffre d'affaires total (commandes livrées)
4. Affiche le nombre de produits par catégorie