const mongoose = require("mongoose");

//here the code of mongoose pagianation verison 2;
const mongoosePaginate = require("mongoose-paginate-v2");
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//here pagiantion done;
newsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("News", newsSchema);
