const cubeController = require("./controllers/cubeController")
const accessoryController = require("./controllers/accessoryController")
const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController")
const router = require("express").Router();

router.use("/", homeController);
router.use("/cube", cubeController)
router.use("/accessory", accessoryController)
router.use("/user", authController)
router.use('*', (req, res) => {
res.render('404')
})

module.exports = router