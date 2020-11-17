const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    note:{
        type:String
    }
})

module.exports = mongoose.model('Note',noteSchema);