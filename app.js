const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const productCtrl = require('./controllers/product')
const serieCtrl = require('./controllers/serie')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.get('/api/product', productCtrl.getProducts)
app.use(cors());
app.get('/api/product/:productId', productCtrl.getProduct)

app.post('/api/product', productCtrl.saveProduct)
app.put('/api/product/productId', productCtrl.updateProduct)
app.use('public', express.static(`${__dirname}/storage/imgs`))
app.delete('/api/product/:productId', productCtrl.deleteProduct)

app.get('/serie', serieCtrl.getSeries)
app.get('/serie/:serieId', serieCtrl.getSerie)
app.post('/serie', serieCtrl.saveSerie)
app.put('/serie/:serieId', serieCtrl.updateSerie)
app.delete('/serie/:serieId', serieCtrl.deleteSerie)


module.exports = app