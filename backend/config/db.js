const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        const con = mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB ');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
