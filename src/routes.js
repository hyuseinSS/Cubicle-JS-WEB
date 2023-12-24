const cubeController = require("./controllers/cubeController")
const homeController = require("./controllers/homeController");
const detailsController = require("./controllers/detailsController");

const router = require("express").Router();

router.use("/", homeController);
router.use("/cube", cubeController)

module.exports = router