const cubeController = require("./controllers/cubeController")
const accessoryController = require("./controllers/accessoryController")
const homeController = require("./controllers/homeController");
const router = require("express").Router();

router.use("/", homeController);
router.use("/cube", cubeController)
router.use("/accessory", accessoryController)

module.exports = router