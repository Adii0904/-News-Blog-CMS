//int this slide we will be creating user schema

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "author"],
    default: "author",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

module.exports = mongoose.model("CMSUser", userSchema);
