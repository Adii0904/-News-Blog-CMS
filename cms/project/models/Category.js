const mongoose = require("mongoose");
const slugiffy = require("slugify");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },

  timestamps: {
    type: Date,
    default: Date.now,
  },
});

categorySchema.pre("save", function (next) {
  this.slug = slugiffy(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Category", categorySchema);
