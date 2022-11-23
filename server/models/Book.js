const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  genres: String,
  authorId: String,
});

module.exports = mongoose.model("Book", BookSchema);
