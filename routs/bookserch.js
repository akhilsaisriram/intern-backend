const express = require('express');
const router = express.Router();
const Transaction=require('../models/Transaction')
const User=require('../models/users');
const Book = require('../models/Book');


// Query 1: Search books by name or term
router.get("/books/search/:term", async (req, res) => {
    const { term } = req.params;
    try {
      const books = await Book.find({ bookName: { $regex: term, $options: "i" } });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  // Query 2: Get books within a rent price range
  router.get("/books/rent-range/:min/:max", async (req, res) => {
    const { min, max } = req.params;
    try {
      const books = await Book.find({
        rentPerDay: { $gte: parseInt(min), $lte: parseInt(max) }
      });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  // Query 3: Search books by category, name/term, and rent range
  router.get("/books/filter/:category/:term/:min/:max", async (req, res) => {
    const { category, term, min, max } = req.params;
    try {
      const books = await Book.find({
        category: { $regex: category, $options: "i" },
        bookName: { $regex: term, $options: "i" },
        rentPerDay: { $gte: parseInt(min), $lte: parseInt(max) }
      });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;
