# 📝 Exercice 3 — Mises à jour avancées

---

### 3.1
Décrémentez le stock de 1 pour le produit "PlayStation 5".

---

### 3.2
Appliquez une réduction de 10% sur tous les produits de la catégorie "Audio" (utilisez `$mul`).

---

### 3.3
Ajoutez le tag "soldes-été" à tous les produits dont le prix est inférieur à 100€. Utilisez `$addToSet` pour éviter les doublons.

---

### 3.4
Supprimez le tag "promo" du produit "RTX 4070 Ti".

---

### 3.5
Pour tous les produits de la catégorie "Ordinateurs portables", ajoutez un champ `updated_at` avec la date actuelle.

---

### 3.6
Augmentez le stock de 20 pour tous les produits qui ont le tag "best-seller".

---

### 3.7
Renommez le champ `is_available` en `disponible` pour tous les produits.

> ⚠️ Après cet exercice, remettez le nom original avec un deuxième `$rename` pour ne pas casser les exercices suivants.