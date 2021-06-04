const mongoose = require('mongoose')
const { appConfig } = require('../config/config')

const Schema = mongoose.Schema
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computer', 'phone', 'accesories'] },
    description: String
})
ProductSchema.methods.setPicture = function setPicture(filename) {
    const { host, port } = appConfig
    this.picture = `${host}:${port}/public/${filename}`
}
module.exports = mongoose.model('Product', ProductSchema)