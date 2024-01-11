const { initializeDatabase } = require("./config/database");
const { initializeHandlebars } = require("./config/handlebars");
const { auth } = require("./middlewares/authMiddleware")
const cookieParser = require('cookie-parser')
const express = require("express");
const routes = require("./routes");


const app = express();

initializeDatabase(app)
initializeHandlebars(app)


app.use("/static", express.static("public"))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(auth)
app.use(routes)
