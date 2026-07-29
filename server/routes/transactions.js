const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all transactions
router.get("/", (req, res) => {
  db.all(
  `
    SELECT
      id,
      product,
      quantity,
      unit,
      price,
      total,
      created_at AS createdAt
      FROM transactions
      ORDER BY id DESC
   `,
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
  const { product, quantity, unit, price } = req.body;

  const total = quantity * price;

  const sql = `
    INSERT INTO transactions (product, quantity, unit, price, total)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [product, quantity, unit, price, total], function (err) {
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

// DELETE a transaction
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.run(
    "DELETE FROM transactions WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          message: "Transaction not found.",
        });
      }

      res.json({
        message: "Transaction deleted successfully!",
      });
    }
  );
});

// UPDATE a transaction
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { product, quantity, unit, price } = req.body;

  const total = quantity * price;

  const sql = `
    UPDATE transactions
    SET product = ?, quantity = ?, unit = ?, price = ?, total = ?
    WHERE id = ?
  `;

  db.run(sql, [product, quantity, unit, price, total, id], function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: "Transaction not found.",
      });
    }

    res.json({
      message: "Transaction updated successfully!",
    });
  });
});

module.exports = router;