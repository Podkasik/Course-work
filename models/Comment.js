const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: {
        type:String,
        reguired: true
    },
    userName:{
        type:String,
        required:true
    },
    itemId:{
        type: String,
        reauired: true
    },
    itemName:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required:true
    }  
})

const Comment = mongoose.model("comment", CommentSchema)
 
module.exports = Comment