const express=require('express')
const bodyParse=require("body-parser")
const mongoose = require('mongoose')
const cors = require('cors')

connectDB()

const app=express()

const PORT =  3000

app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.use('/app/user',require('./routes/user'))
app.use('/app/sites',require('./routes/notes'))

app.listen(PORT,console.log(`server running in ${PORT}`))