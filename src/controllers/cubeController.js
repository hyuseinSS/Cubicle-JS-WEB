const { getOne, createCube: createCube } = require("../services/cubeService");
const router = require("express").Router();
const Cube = require("../models/Cube");
const { auth } = require("../middlewares/authMiddleware");

router.get("/create", (req, res) => {
    res.render("create")
})

router.post("/create", async (req, res) => {
    const cube = req.body
    cube.owner = req.user._id;

    await createCube(cube)
    res.redirect('/');
})

router.get('/details/:id', async (req, res) => {
    const cube = await getOne(req.params.id);
    const isOwner = cube.owner == req.user?._id;

    res.render("details", { cube, isOwner })

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

router.get("/edit/:id", auth, async (req, res) => {
    const cube = await getOne(req.params.id);

    if (cube.owner != req.user._id) {
        return res.redirect('/404')
    }

    cube[`difficultyLevel${cube.difficultyLevel}`] = true
    console.log(req.user)

    res.render('editCubePage', { cube })
})


router.post('/edit/:id', async (req, res) => {
    const cube = req.body
    const id = req.params.id

    await Cube.updateOne({ _id: id }, cube);
    res.redirect(`/cube/details/${id}`)
})



module.exports = router