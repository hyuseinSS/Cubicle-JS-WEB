const { getOne, createCube: createCube } = require("../services/cubeService");
const router = require("express").Router();
const Cube = require("../models/Cube");

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", async (req, res) => {
    const cube = req.body
    await createCube(cube)
    res.redirect('/');
})

router.get('/details/:id', async (req, res) => {
    const cube = await getOne(req.params.id);
    res.render("details", { cube })

})

router.get('/delete/:id', async (req, res) => {
    const cube = await getOne(req.params.id);
    res.render('deleteCubePage', { cube })
})

router.post('/delete/:id', async (req, res) => {
    const id = req.params.id
    await Cube.deleteOne({ _id: id })
    res.redirect("/")
})

router.get("/edit/:id", async (req, res) => {
    const cube = await getOne(req.params.id);
    res.render('editCubePage', { cube })
})


router.post('/update/:id', async (req, res) => {
    const cube = req.body
    const id = req.params.id
    await Cube.updateOne({ _id: id }, cube);
    res.redirect("/")
})



module.exports = router