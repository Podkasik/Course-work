const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    id_collection:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    tags:{
        type: [],
    },
    settingsCollection:{
        type: []
    },
    createDate:{
        type: String,
        required:true
    }
})

const Item = mongoose.model('item',ItemSchema)

module.exports = Item