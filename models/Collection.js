const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectionSchema = new Schema({
    userId: {
        type:String,
        reguired: true
    },
    userName:{
        type: String,
        reauired: true
    },
    name:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    subject: {
        type: String      
    },
    date:{
        type: String
    },
    image: {
        type: String //add link to image
    },
    settings:{
        type: String
    }  
})

const Collection = mongoose.model("collection", CollectionSchema)
 
module.exports = Collection