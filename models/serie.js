const mongoose = require('mongoose')

const Schema = mongoose.Schema
const SerieSchema = Schema({
    name: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['anime', 'serie'] },
    description: String
})
module.exports = mongoose.model('Serie', SerieSchema)