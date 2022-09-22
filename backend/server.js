require('dotenv').config()
const express = require('express')
const app = express()
const dbConfig = require("./config/dbConfig")
const cors = require('cors');



app.use(cors());
app.use(express.json())



const brands = require('./routes/brand.js');
app.use('/brands', brands);









const port  = process.env.PORT|| 5000;

app.listen(port,()=>console.log(`Backend Node Server start on port ${port}`))