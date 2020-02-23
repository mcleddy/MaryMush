const express = require('express')
const router = express.Router()
const User = require("../models").User;
const passport = require('../utils/passport');

// Google Auth
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile']
    })
)

// Google Redirect
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

// Find User
router.get('/user',
    (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user })
        } else {
            return res.json({ user: null })
        }
    })

// Login
router.post('/login',
    (req, res, next) => {
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        const user = JSON.parse(JSON.stringify(req.user)) // hack
        const cleanUser = Object.assign({}, user)
        if (cleanUser.password) {
            delete cleanUser.password
        }
        return res.json({ user: cleanUser })
    }
)

// Logout
router.post('/logout',
    (req, res) => {
        if (req.user) {
            req.session.destroy()
            res.clearCookie('connect.sid')
            return res.json({ msg: 'logging you out' })
        } else {
            return res.json({ msg: 'no user to log out!' })
        }
    })

// Signup
router.post('/signup', (req, res) => {
    const { username, password } = req.body
    // TODO Add Validation
    User.findOne({ where: { 'username': username } }).then((err, userMatch) => {
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        User.create({
            "username": username,
            "password": password
        }, {}).then(err => {
            if (err) return res.json(err)
            return res.json(savedUser)
        });
    })
})

module.exports = router
