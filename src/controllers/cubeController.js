const router = require("express").Router();
const fs = require("fs/promises");
const path = require("path")
const cubes = require("../db.json");
const { save, getOne, deleteOne } = require("../services/cubeService");

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", (req, res) => {
    const cube = req.body

    if (cube.name.length < 2) {
        return res.status(400).send("Longer Name Please!")
    }
    save(cube)
        .then(() => {
            res.redirect("/")
        })
        .catch(err => {
            return res.status(400).send("Error Error !")
        })
})

router.get('/details/:id', (req, res) => {
    const cube = getOne(req.params.id)[0]
    res.render("details", { cube })
})

router.get("/delete/:id", (req, res) => {
    const id = req.params.id
    const result = deleteOne(id)
    res.redirect("/")
})

module.exports = router