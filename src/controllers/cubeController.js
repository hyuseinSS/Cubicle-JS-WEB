const { save, getOne, deleteOne, like, create } = require("../services/cubeService");
const router = require("express").Router();
const Cube = require("../models/Cube");
const { getAll, getOneAccessory } = require("../services/accessoryService");

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", async (req, res) => {
    const cube = req.body
    console.log(cube);
    await create(cube)
    res.redirect('/');
})

router.get('/details/:id', async (req, res) => {

    const cube = await getOne(req.params.id);
    const cubesIDs = cube.accessories

    res.render("updatedDetailsPage", { cube })

})

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    await Cube.deleteOne({ _id: id })
    res.redirect("/")
})

router.get("/edit/:id", async (req, res) => {
    const cube = await getOne(req.params.id);
    res.render('update', { cube })
})


router.post('/update', async (req, res) => {
    const cube = req.body
    const id = req.body.id
    await Cube.updateOne({ _id: id }, cube);
    res.redirect("/")
})



module.exports = router