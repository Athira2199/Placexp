const express = require('express')
const bycrypt=require('bcryptjs')
const Note = require('../models/notes');
const User = require('../models/user');
const router = express.Router();

// list saved notes
router.get('/list',async(req,res)=>{
    if(req.query.user == ''){
        res.json({
            code : 422,
            status  : 'user query parameter required'
        })
    }
    try{
        const notes = await Note.find({userId:req.query.user})
        res.json({
            statusCode : 200,
            data : notes
        })
    }
    catch(err){
        res.json({
            statusCode : 500,
            status    : 'Internal Server Error'
        })
    }
})

// save a new note
router.post('/',(req,res)=>{
    if(req.query.user == '' || req.body.note == ''){
        res.json({
            code : 422,
            status  : 'one/two parameters missing'
        })
    }
    try{
        const note = new Note({
            userId : req.query.user,
            note   : req.body.note
        })
        await note.save()
        res.json({
            statusCode : 201,
            status : 'success'
        })
    }
    catch(err){
        res.json({
            statusCode : 500,
            status    : 'Internal Server Error'
        })
    }
})
module.exports = router;