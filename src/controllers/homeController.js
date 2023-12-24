const router = require("express").Router();
const cubes = require("../db.json")



router.get("/", (req, res) => {
    res.render("index", { cubes })
})

router.get("/about", (req, res) => {
    res.render("about")
})


router.post("/cube/create", (req, res) => {
    res.render("create")
    const data = req.body
    console.log(data);
})

module.exports = router