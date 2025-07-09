const express = require("express");

const router = express.Router();

//our methods imports

const articleController = require("../controllers/articleController");
const categoryController = require("../controllers/categoryController");
const commentController = require("../controllers/commentController");
const UserController = require("../controllers/userController");

//here is the only login routes;
router.get("/", UserController.loginPage);
router.post("/index", UserController.adminLogin);
router.get("/logout", UserController.logout);
router.get("/dashboard", UserController.dashboard);
router.get("/setting", UserController.setting);

//all users CRUD routes;
router.get("/users", UserController.allUser);
router.get("/add-user", UserController.addUserPage);
router.post("/add-user", UserController.addUser);
router.get("/update-user/:id", UserController.updateUserPage);
router.post("/update-user/:id", UserController.updateUser);
router.get("delete-user/:id", UserController.deleteUser);

//all routes for categories;
router.get("/category", categoryController.allCategory);
router.get("/add-category", categoryController.addCategorypage);
router.post("/add-category", categoryController.addCategory);
router.get("/update-category/:id", categoryController.updateCategoryPage);
router.post("/update-category/:id", categoryController.updateCategory);
router.get("delete-category/:id", categoryController.deleteCategory);

//all routes for news Article

router.get("/article", articleController.allArticle);
router.get("/add-article", articleController.addArticlePage);
router.post("/add-article", articleController.addArticle);
router.get("/update-article/:id", articleController.updateArticlePage);
router.post("/update-article/:id", articleController.updateArticle);
router.get("delete-article/:id", articleController.deleteArticle);

// comments routes;

router.get("/comments", commentController.allComments);

module.exports = router;
