const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all transactions
router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM transactions ORDER BY id DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json(rows);
    }
  );
});

// POST a new transaction
router.post("/", (req, res) => {
  const { product, quantity, price } = req.body;

  const total = quantity * price;

  const sql = `
    INSERT INTO transactions (product, quantity, price, total)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [product, quantity, price, total], function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(201).json({
      message: "Transaction saved successfully!",
      id: this.lastID,
    });
  });
});

module.exports = router;