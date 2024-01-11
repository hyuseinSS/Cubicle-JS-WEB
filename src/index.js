const { initializeDatabase } = require("./config/database");
const { initializeHandlebars } = require("./config/handlebars");
const { setupExpressJS } = require("./config/express");
const cookieParser = require('cookie-parser')
const express = require("express");


const app = express();


initializeDatabase(app)
initializeHandlebars(app)
setupExpressJS(app)
app.use(cookieParser)