const express = require('express');
const { loginPage ,signupPage, homePage, formPage, signup, login, logout, tablePage,} = require('../controllers/user.controller');
const { getProducts, addProduct, deleteProduct, updateProduct, editProduct } = require('../controllers/product.controller');
const userAuth = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/',loginPage)
router.get('/signup',signupPage)
router.get('/dashboard',userAuth,homePage)
router.get('/create',formPage)
router.get('/logout',logout)
router.get('/tables',tablePage)


router.post('/signup',signup)
router.post('/',login)
router.post('/create',addProduct)
router.get('/',getProducts)
router.get('/delete/:id',deleteProduct)
router.post('/edit/:id',updateProduct)
router.get('/edit/:id',editProduct)

module.exports = router