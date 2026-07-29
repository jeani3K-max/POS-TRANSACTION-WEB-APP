const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database location
const dbPath = path.join(__dirname, "database", "database.db");
console.log("Database path:", dbPath);

// Connect to SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to SQLite database.");

    // Create the transactions table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        unit TEXT NOT NULL,
        price REAL NOT NULL,
        total REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `,
    (err) => {
       if (err) {
         console.error("Transactions table error:", err);
         } else {
          console.log("Transactions table ready.");
        }
     });

    // Create the users table
    db.run(`
       CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT UNIQUE NOT NULL,
       password TEXT NOT NULL
      )
   `,
   (err) => {
      if (err) {
      console.error("Users table error:", err);
     } else {
        console.log("Users table ready.");
      }
    });

  }
});

module.exports = db;