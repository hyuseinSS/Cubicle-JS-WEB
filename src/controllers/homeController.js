const router = require("express").Router();
const { getAll } = require("../services/cubeService")


router.get("/", (req, res) => {
    let queryString = req.query;
    const name = queryString.search
    const from = Number(queryString.from) || 1
    const to = Number(queryString.to) || 6
    let cubes = getAll(name, from, to)

    res.render("index", { cubes })
})

router.get("/about", (req, res) => {
    res.render("about")
})


module.exports = router