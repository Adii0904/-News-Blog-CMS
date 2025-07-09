const express = require("express");

const router = express.Router();

//improt all function from sitecontrollers file;

const siteController = require("../controllers/siteController.js");

router.get("/", siteController.index);
router.get("/category/:name", siteController.articlesByCategories);
router.get("/single/:id", siteController.singleArticle);
router.get("/search", siteController.search);
router.get("./author/:name", siteController.author);
router.post("single/:id", siteController.addComment);

module.exports = router;
