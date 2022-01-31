//  Add your code here

const mongoose = require("mongoose")

const celebretySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    occupation:{
        type:String,
    },
    catchPhrase:{
        type:String,
    },
})

module.exports = mongoose.model("Celebrety", celebretySchema)
