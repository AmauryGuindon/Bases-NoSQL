<?php
// ============================================================
// Exercice 10 — Partie D : Script PHP MongoDB
// Base de données : shop_mongo
// ============================================================

require 'vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");
$db = $client->shop_mongo;

// D.1.1 — Les 5 produits les plus chers (nom et prix)
echo "=== 5 produits les plus chers ===\n";
$products = $db->products->find(
    [],
    [
        'projection' => ['name' => 1, 'price' => 1, '_id' => 0],
        'sort'       => ['price' => -1],
        'limit'      => 5,
    ]
);
foreach ($products as $product) {
    echo $product['name'] . " — " . number_format($product['price'], 2) . "€\n";
}

// D.1.2 — Chiffre d'affaires total (commandes livrées)
echo "\n=== Chiffre d'affaires total (commandes livrées) ===\n";
$pipeline = [
    ['$match'   => ['status' => 'delivered']],
    ['$group'   => ['_id' => null, 'ca_total' => ['$sum' => '$total_amount']]],
    ['$project' => ['_id' => 0, 'ca_total' => 1]],
];
$result = $db->orders->aggregate($pipeline)->toArray();
if (!empty($result)) {
    echo "CA total : " . number_format($result[0]['ca_total'], 2) . "€\n";
}

// D.1.3 — Nombre de produits par catégorie
echo "\n=== Nombre de produits par catégorie ===\n";
$pipeline = [
    ['$group' => ['_id' => '$category', 'count' => ['$sum' => 1]]],
    ['$sort'  => ['count' => -1]],
];
$categories = $db->products->aggregate($pipeline);
foreach ($categories as $cat) {
    echo $cat['_id'] . " : " . $cat['count'] . " produit(s)\n";
}
