const mongoose = require("mongoose");

const categoryModel = require("../models/Category");
const newsModel = require("../models/News");
const userModel = require("../models/User");
const commentModel = require("../models/Comment");

//defining the controller methods below;

const index = async (req, res) => {
  res.render("index");
};

const articlesByCategories = async (req, res) => {
  res.render("category.ejs");
};

const singleArticle = async (req, res) => {
  res.render("single");
};

const search = async (req, res) => {
  res.render("search");
};

const author = async (req, res) => {
  res.send("author");
};

const addComment = async (req, res) => {};

module.exports = {
  index,
  singleArticle,
  articlesByCategories,
  search,
  author,
  addComment,
};
