const router = require("express").Router();
const fs = require("fs/promises");
const cubes = require("../db.json");
const path = require("path")

router.get("/create", (req, res) => {
    res.render("create")
    console.log(cubes)
})

router.post("/create", (req, res) => {

    const data = req.body;

    cubes.push(data)
    fs.writeFile(path.resolve("../db.json"), JSON.stringify(cubes), { encoding: "utf-8" })
        .then(() => {
            res.redirect("/")
        })

})

module.exports = router