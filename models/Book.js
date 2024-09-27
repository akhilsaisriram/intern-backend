const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  category: String,
  rentPerDay: Number,
});

module.exports = mongoose.model("Book", bookSchema);