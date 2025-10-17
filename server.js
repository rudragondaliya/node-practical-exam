require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/database');
const cookieParser = require('cookie-parser');
const app = express();
const port = 9001;

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.static('public'))

app.use('/',require('./routers/index'))

app.listen(port,(error)=>{
    if(!error){
        db();
        console.log("server is Started..");
        console.log("http://localhost:"+port);
    }
})