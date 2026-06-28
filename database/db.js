
//"mongodb+srv://debaratiofficial2026:debaratiofficial2026@cluster0.8qjik7f.mongodb.net/"

const mongoose = require('mongoose');

const connectToDB = async () =>{

    try{
await mongoose.connect("mongodb+srv://debaratiofficial2026:debaratiofficial2026@cluster0.8qjik7f.mongodb.net/")
console.log("Mongo db is connected successfully")    
}
    catch(err){
        console.log("mongodb connection failed",err);
        process.exit(1);
    }
}

module.exports = connectToDB;