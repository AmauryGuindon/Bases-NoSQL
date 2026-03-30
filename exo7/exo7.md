# 📝 Exercice 7 — Agrégation avancée

> Ces exercices demandent de la réflexion. Décomposez le problème en étapes avant d'écrire le pipeline.

---

### 7.1 — Chiffre d'affaires mensuel
Calculez le chiffre d'affaires par mois pour les commandes livrées. Affichez le mois (numéro), le CA mensuel et le nombre de commandes. Triez par mois.

---

### 7.2 — Segmentation produits
Créez une segmentation des produits par tranche de prix :
- Moins de 100€ → "Accessoire"
- 100€ à 499€ → "Milieu de gamme"
- 500€ à 999€ → "Haut de gamme"
- 1000€ et plus → "Premium"

Affichez le nombre de produits et le prix moyen par segment.

> 💡 Indice : utilisez `$addFields` avec `$switch` pour créer le champ segment, puis `$group`.

---

### 7.3 — Analyse des tags avec prix
Pour chaque tag, affichez le nombre de produits, le prix moyen et le prix max des produits qui portent ce tag. Triez par nombre de produits décroissant.

---

### 7.4 — Clients fidèles
Affichez les clients qui ont passé au moins 2 commandes livrées. Affichez leur nom, le nombre de commandes livrées et le montant total dépensé.

---

### 7.5 — Évolution du stock
Pour chaque produit, affichez : son nom, son stock actuel, la quantité totale vendue (somme des `quantity` dans les `items` des commandes non annulées), et le stock théorique initial (stock actuel + quantité vendue).

> 💡 Indice : commencez par `$unwind` sur les items des commandes, puis groupez par product_name.

---

### 7.6 — Tableau de bord
En utilisant `$facet`, affichez en une seule requête sur la collection `orders` :
- Le chiffre d'affaires total (commandes livrées)
- Le nombre de commandes par statut
- Le panier moyen (commandes non annulées)

---

### 7.7 — Recommandation "Les clients qui ont acheté X ont aussi acheté..."
Pour le produit "MacBook Pro 14\"", trouvez les autres produits achetés par les clients qui ont aussi acheté ce MacBook. Affichez le nom du produit recommandé et le nombre de clients en commun. Excluez le MacBook lui-même.

> 💡 C'est l'exercice le plus difficile. Décomposez :
> 1. Trouvez les commandes qui contiennent le MacBook
> 2. Récupérez les user_id de ces commandes
> 3. Trouvez les autres commandes de ces users
> 4. Déroulez les items et comptez les produits (hors MacBook)