const { initializeDatabase } = require("./config/database");
const { initializeHandlebars } = require("./config/handlebars");
const { setupExpressJS } = require("./config/express");
const express = require("express");



const app = express();
initializeDatabase(app)
initializeHandlebars(app)
setupExpressJS(app)