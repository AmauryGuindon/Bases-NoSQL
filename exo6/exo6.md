# 📝 Exercice 6 — Agrégation avec jointures ($lookup)

---

### 6.1
Affichez la liste des commandes livrées avec le prénom et nom du client (jointure entre `orders` et `users`). Affichez le nom complet du client, le montant et la date. Triez par montant décroissant.

---

### 6.2
Affichez le montant total dépensé par chaque client (commandes livrées uniquement), avec son nom complet. Triez par montant décroissant.

---

### 6.3
Affichez les avis (reviews) avec le nom du produit et le prénom de l'utilisateur qui a laissé l'avis. Affichez le nom du produit, le prénom de l'utilisateur, la note et le commentaire.

---

### 6.4
Affichez le top 3 des meilleurs clients (ceux qui ont dépensé le plus en commandes livrées). Affichez le rang (position), le nom complet, le nombre de commandes et le montant total.

> 💡 Indice : groupez par user_id, triez, limitez à 3, puis faites le $lookup.

---

### 6.5
Pour chaque catégorie de produits, affichez le nombre de produits et la liste des noms de produits (concaténés). Utilisez `$push` dans le `$group`.

---

### 6.6
Affichez les commandes avec le détail complet : nom du client, date, statut, montant, et nombre d'articles dans la commande. Triez par date décroissante. Ne prenez que les 10 dernières commandes.