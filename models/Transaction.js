const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date },
  rent: { type: Number },
  status: { type: String, enum: ['issued', 'returned'], default: 'issued' }
});
module.exports = mongoose.model("Transaction", transactionSchema);

