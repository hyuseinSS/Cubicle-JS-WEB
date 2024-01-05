const routes = require("../routes");
const express = require('express')


exports.setupExpressJS = (app) => {

    app.use("/static", express.static("public"))
    app.use(express.urlencoded({ extended: false }))
    app.use(routes)
}