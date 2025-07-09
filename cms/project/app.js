const express = require("express");
const app = express();

//our imports
const mongoose = require("mongoose");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-sessions");
const flash = require("connect-flash");
require("dotenv").config();

//our middleware is here;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "layout");
app.set("view engine", "ejs");

//databse connection url is here
mongoose.connect(process.env.MONGODB_URI);

app.use("/", require("./routes/frontend"));

//for admin routes;

app.use("/admin", (req, res, next) => {
  res.locals.layout = "admin/layout";
  next();
});
app.use("/admin", require("./routes/admin"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running");
});
