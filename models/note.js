const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    note:{
        type:String
    }
})

module.exports = mongoose.model('Note',noteSchema);