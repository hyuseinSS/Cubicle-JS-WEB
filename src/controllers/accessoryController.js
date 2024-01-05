const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");
const { getAll, attachAccessory } = require("../services/accessoryService");

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
    const accessories = await getAll()
    const cubeId = req.params.cubeId
    const cube = await Cube.findById(cubeId).lean()
    res.render("attachAccessory", { cube, accessories })
})

router.post('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId
    const accessoryId = req.body.accessory

    await attachAccessory(cubeId,accessoryId)

    res.redirect(`/cube/details/${cubeId}`)
})

module.exports = router


