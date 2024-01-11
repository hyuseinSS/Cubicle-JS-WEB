const router = require('express').Router()
const authService = require("../services/authService")

router.get('/register', (req, res) => {
    res.render('auth/registerPage')
})


router.post('/register', async (req, res) => {
    const userInfo = req.body
    const user = await authService.register(userInfo)

    if (user) {
        res.redirect('/user/login')
    } else {
        res.status(404).send('Cannot create user')
        //ToDo:redirect to 404 page.
    }
})

router.get('/login', (req, res) => {
    res.render('auth/loginPage')
})

router.post('/login', async (req, res) => {
    const token = await authService.login(req.body)
    console.log(token);
    if (!token) {
        res.redirect('/404')
    }

    res.cookie('session', token)

    res.redirect('/');
})


module.exports = router;