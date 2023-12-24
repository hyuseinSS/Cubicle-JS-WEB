const router = require("express").Router();
const fs = require("fs/promises");
const path = require("path")
const cubes = require("../db.json");

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", (req, res) => {
    const cube = req.body

    if (cube.name.length < 2) {
        return res.status(400).send("Longer Name Please!")
    }


    cubes.push(cube)

    fs.writeFile('src/db.json', JSON.stringify(cubes, "", 4))
        .then(() => {
            res.redirect("/")
        })
        .catch(err => {
            return res.status(400).send("Error Error !")
        })

})

module.exports = router