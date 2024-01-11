const router = require('express').Router()
const authService = require("../services/authService")
const { sessionName } = require('../config/appConstants')

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
    }
})

router.get('/login', (req, res) => {
    res.render('auth/loginPage')
})

router.post('/login', async (req, res) => {

    const token = await authService.login(req.body)

    if (!token) {
        res.redirect('/404')
    }

    res.cookie(sessionName, token, { httpOnly: true })
    res.redirect('/');
})


router.get('/logout', (req, res) => {
    res.clearCookie(sessionName)
    res.redirect('/');
})

module.exports = router;