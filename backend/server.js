require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const postRouter= require('./routers/postRouters')
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MongoDB connection
connectDb()

app.use('/api/post',postRouter);
app.get('/', (req, res) =>res.send('NeonFlake Server running'));
app.listen(PORT,(req,res)=>console.log('server listening on port ', PORT));


console.log(process.env.PORT);