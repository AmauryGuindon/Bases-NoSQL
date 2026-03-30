# 📝 Exercice 8 — Index et Performance

---

### 8.1
Exécutez la requête suivante avec `explain("executionStats")` et notez le `totalDocsExamined` et le `winningPlan.stage` :

```javascript
db.products.find({ category: "Audio" })
```

Quel type de scan est effectué ?

---

### 8.2
Créez un index sur le champ `category` de la collection `products`. Puis relancez la même requête avec `explain()`. Comparez les résultats.

---

### 8.3
Créez un index composé sur `category` (croissant) et `price` (décroissant) pour la collection `products`. Vérifiez avec `explain()` qu'il est utilisé pour la requête :

```javascript
db.products.find({ category: "Audio" }).sort({ price: -1 })
```

---

### 8.4
Créez un index unique sur le champ `email` de la collection `users`. Essayez ensuite d'insérer un utilisateur avec un email qui existe déjà. Que se passe-t-il ?

---

### 8.5
Listez tous les index de la collection `products`. Puis supprimez l'index simple sur `category` (gardez le composé).

---

### 8.6
Créez un index texte sur les champs `name` et `description` de la collection `products`. Puis recherchez les produits contenant le mot "bluetooth" avec `$text`.