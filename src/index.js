const express = require("express");
const handlebars = require("express-handlebars")
const app = express();
const homeController = require("./controllers/homeController")
app.use("/static", express.static("public"))

app.engine("hbs", handlebars.engine({
    extname: "hbs",
}))

app.set("view engine", "hbs")
app.set("views", "./src/views")


app.get("/", homeController.index)

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/create", (req, res) => {
    res.render("create")
})

app.listen(5000, () => console.log("Server started on port 5000"))