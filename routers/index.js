const express = require('express');
const { loginPage ,signupPage, homePage, formPage, signup, login, logout, tablePage} = require('../controllers/user.controller');
const router = express.Router();

router.get('/',loginPage)
router.get('/signup',signupPage)
router.get('/dashboard',homePage)
router.get('/create',formPage)
router.get('/logout',logout)
router.get('/tables',tablePage)


router.post('/signup',signup)
router.post('/',login)

module.exports = router