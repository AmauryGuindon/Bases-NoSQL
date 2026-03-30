// ============================================================
// 📦 DATASET shop_mongo — Collection : users
// ============================================================
// Exécuter dans mongosh : mongosh < 01_users.js
// ============================================================

use shop_mongo;
db.users.drop();

db.users.insertMany([
  {
    _id: ObjectId("665a0001aabb000000000001"),
    first_name: "Alice",
    last_name: "Martin",
    email: "alice.martin@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "admin",
    city: "Paris",
    country: "France",
    birth_date: ISODate("1990-03-15"),
    created_at: ISODate("2024-01-10T09:00:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000002"),
    first_name: "Bob",
    last_name: "Dupont",
    email: "bob.dupont@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Lyon",
    country: "France",
    birth_date: ISODate("1995-07-22"),
    created_at: ISODate("2024-01-15T14:30:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000003"),
    first_name: "Charlie",
    last_name: "Durand",
    email: "charlie.durand@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Marseille",
    country: "France",
    birth_date: ISODate("1988-11-03"),
    created_at: ISODate("2024-02-01T10:00:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000004"),
    first_name: "Diana",
    last_name: "Leroy",
    email: "diana.leroy@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Toulouse",
    country: "France",
    birth_date: ISODate("1992-05-18"),
    created_at: ISODate("2024-02-14T16:45:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000005"),
    first_name: "Eve",
    last_name: "Moreau",
    email: "eve.moreau@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Bordeaux",
    country: "France",
    birth_date: ISODate("2000-01-30"),
    created_at: ISODate("2024-03-01T08:15:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000006"),
    first_name: "Frank",
    last_name: "Simon",
    email: "frank.simon@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Nantes",
    country: "France",
    birth_date: ISODate("1985-09-12"),
    created_at: ISODate("2024-03-10T11:00:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000007"),
    first_name: "Grace",
    last_name: "Laurent",
    email: "grace.laurent@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Strasbourg",
    country: "France",
    birth_date: ISODate("1998-04-25"),
    created_at: ISODate("2024-03-20T13:30:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000008"),
    first_name: "Hugo",
    last_name: "Michel",
    email: "hugo.michel@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Lille",
    country: "France",
    birth_date: ISODate("1993-12-08"),
    created_at: ISODate("2024-04-05T09:45:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb000000000009"),
    first_name: "Isabelle",
    last_name: "Garcia",
    email: "isabelle.garcia@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Bruxelles",
    country: "Belgique",
    birth_date: ISODate("1991-06-14"),
    created_at: ISODate("2024-04-15T17:00:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb00000000000a"),
    first_name: "Jules",
    last_name: "Petit",
    email: "jules.petit@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Genève",
    country: "Suisse",
    birth_date: ISODate("1997-08-20"),
    created_at: ISODate("2024-05-01T10:30:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb00000000000b"),
    first_name: "Karim",
    last_name: "Benali",
    email: "karim.benali@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Paris",
    country: "France",
    birth_date: ISODate("1994-02-28"),
    created_at: ISODate("2024-05-10T14:00:00Z"),
    is_active: true
  },
  {
    _id: ObjectId("665a0001aabb00000000000c"),
    first_name: "Laura",
    last_name: "Fontaine",
    email: "laura.fontaine@email.com",
    password: "$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
    role: "client",
    city: "Lyon",
    country: "France",
    birth_date: ISODate("1999-10-05"),
    created_at: ISODate("2024-06-01T08:00:00Z"),
    is_active: false
  }
]);

print("✅ Collection users : " + db.users.countDocuments() + " documents insérés");
