


const Serie = require('../models/serie')

function getSerie(req, res) {
    let serieId = req.params.serieId

    Serie.findById(serieId, (err, serie) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!serie) return res.status(404).send({ message: `la serie no existe` })

        res.status(200).send({ product })
    })
}

function getSeries(req, res) {
    Product.find({}, (err, Series) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!series) return res.status(404).send({ message: 'No existen serie' })

        res.send(200, { products })
    })
}

function saveSerie(req, res) {
    console.log('POST /api/serie')
    console.log(req.body)

    let serie = new Serie()
    serie.name = req.body.name
    serie.price = req.body.price
    serie.category = req.body.category
    serie.description = req.body.description

    product.save((err, serieStored) => {
        if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` })

        res.status(200).send({ serie: serieStored })
    })
}

function updateSerie(req, res) {
    let serieId = req.params.productId
    let update = req.body

    Serie.findByIdAndUpdate(serieId, update, (err, serieUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar serie: ${err}` })

        res.status(200).send({ serie: serieUpdated })
    })
}

function deleteSerie(req, res) {
    let serieId = req.params.serieId

    Serie.findById(serieId, (err, serie) => {
        if (err) res.status(500).send({ message: `Error al borrar la serie: ${err}` })

        serie.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar la serie: ${err}` })
            res.status(200).send({ message: 'la serie ha sido eliminado' })
        })
    })
}

module.exports = {
    getSerie,
    getSeries,
    saveSerie,
    updateSerie,
    deleteSerie
}
