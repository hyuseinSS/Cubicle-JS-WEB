const cubeController = require("./controllers/cubeController")
const homeController = require("./controllers/homeController");

const router = require("express").Router();

router.get("/", homeController.index);
router.get("/about", homeController.about)

router.use("/cube", cubeController)


module.exports = router