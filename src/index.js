const express = require("express");
const { initializeDatabase } = require("./config/database");
const { initializeHandlebars } = require("./config/handlebars");
const app = express();

initializeDatabase(app)
initializeHandlebars(app)