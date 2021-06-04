
const express = require('express')
const productCtrl = require('../controllers/product')
const serieCtrl = require('../controllers/serie')
const upload = require('../libs/storage')
//const userCtrl = require('../controllers/user')
//const auth = require('../middlewares/auth')
const api = express.Router()
//Rutas product
api.get('/product', auth, productCtrl.getProducts)
api.get('/product/:productId', auth, productCtrl.getProduct)
api.post('/product', auth, upload.single('image'), productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)
//Rutas de la serie
api.get('/serie', auth, serieCtrl.getSeries)
api.get('/serie/:serieId', auth, serieCtrl.getSerie)
api.post('/serie', auth, serieCtrl.saveSerie)
api.put('/serie/:serieId', auth, serieCtrl.updateSerie)
api.delete('/serie/:serieId', auth, serieCtrl.deleteSerie)

//rutas de user
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api