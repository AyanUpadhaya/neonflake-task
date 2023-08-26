const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const postRouter= require('./routers/postRouters')
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));


// connecting to mongodb
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('DB connection successfull'))
.catch((err)=>console.log(err.message))

app.use('/api/post',postRouter);
app.get('/', (req, res) =>res.send('NeonFlake Server running'));
app.listen(PORT,(req,res)=>console.log('server listening on port ', PORT));

