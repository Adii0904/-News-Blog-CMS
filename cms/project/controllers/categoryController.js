const categoryModel = require("../models/Category");

const allCategory = async (req, res) => {
  res.render("admin/category/index");
};

const addCategorypage = async (req, res) => {
  res.render("admin/category/create");
};

const addCategory = async (req, res) => {};

const updateCategoryPage = async (req, res) => {
  res.render("admin/category/update");
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {};

module.exports = {
  allCategory,
  addCategory,
  addCategorypage,
  updateCategory,
  updateCategoryPage,
  deleteCategory,
};
