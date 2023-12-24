const router = require("express").Router();
const fs = require("fs/promises");
const cubes = require("../db.json");
const path = require("path")

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", (req, res) => {

    const data = req.body;

    cubes.push(data)
    console.log(path.resolve("src", "db.json"));
    fs.writeFile(path.resolve("src", "db.json"), JSON.stringify(cubes), { encoding: "utf-8" })
        .then(() => {
            res.redirect("/")
        })
        .catch(err => {
            return res.status(400).send("LoL!")
        })

})

module.exports = router