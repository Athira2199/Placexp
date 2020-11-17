const mongoose = require('mongoose');
MONGO_URI= "mongodb+srv://athiravajit:god9play02199@cluster0-uor5n.gcp.mongodb.net/studyinschool?retryWrites=true&w=majority"
//"mongodb+srv://admin:studyinschool@cluster0.oyoqe.gcp.mongodb.net/studyinschool?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
