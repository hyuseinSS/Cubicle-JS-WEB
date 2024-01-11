const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");
const { getAll, attachAccessory, deleteOneAccessory, getCubesAttachedAccessories } = require("../services/accessoryService");

const router = require("express").Router();

router.get("/create", (req, res) => {

    res.render("createAccessory")
})

router.post('/create', async (req, res) => {
    const accessory = req.body;
    await Accessory.create(accessory)
    res.redirect('/')
})

router.get('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId
    const cube = await Cube.findById(cubeId).lean()
    const accessories = await getCubesAttachedAccessories(cube.accessories).lean();
    cube.accessories = accessories
    res.render("attachAccessory", { cube })
})

router.post('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId
    const accessoryId = req.body.accessory

    await attachAccessory(cubeId, accessoryId)
    res.redirect(`/cube/details/${cubeId}`)
})

// router.get('/delete/:accessoryId', (req, res) => {
//     const cubeId = req.params.cubeId
//     const accessoryId = req.body.accessory
//     deleteOneAccessory(cubeId, accessoryId)
// })
module.exports = router


