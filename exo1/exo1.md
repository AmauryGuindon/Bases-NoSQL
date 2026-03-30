# 📝 Exercice 1 — CRUD de base

**Prérequis :** Avoir importé les fichiers dans MongoDB.
**Base de données :** `shop_mongo`

> Toutes les requêtes doivent être écrites en mongosh.

---

### 1.1
Affichez tous les produits disponibles (`is_available: true`) dont le prix est inférieur à 200€, triés du moins cher au plus cher. Affichez uniquement le nom et le prix.

---

### 1.2
Affichez le nombre total de produits dans la base.

---

### 1.3
Affichez les utilisateurs qui habitent à Paris. Affichez leur prénom, nom et email.

---

### 1.4
Affichez les produits de la catégorie "Composants PC", triés par prix décroissant. Affichez le nom, le prix et le stock.

---

### 1.5
Insérez un nouveau produit dans la collection `products` :
- Nom : "Razer Kraken V3"
- Prix : 89.99
- Stock : 60
- Catégorie : "Accessoires gaming"
- Disponible : true
- Tags : ["nouveauté", "promo"]
- Date de création : la date actuelle

---

### 1.6
Modifiez le prix du produit "Sony WH-1000XM5" à 319.99€ et ajoutez-lui le tag "soldes".

---

### 1.7
Supprimez tous les produits qui ne sont pas disponibles (`is_available: false`).
Mon travail
