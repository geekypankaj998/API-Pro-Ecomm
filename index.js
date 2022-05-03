require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const db = require('./config/mongoose');
const Product = require('./model/productCatalogue');
const session = require("express-session");
const cookieParser = require("cookie-parser");  

app.use(express.urlencoded({
  extended : true
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname,'./assets')));

app.set('view engine','ejs');
app.set('views','./view');

app.use(session({
  name : 'uploaderBay>>',
  //this helps in encryption will set it whe will be deploying the code on server
  secret : "secretT",
  saveUninitialized : false,          //when the user not logged in or identity is not established don't keep any info in cookie anything about him 
  resave:false                       // that means rewriting the cookie again and again
}));

app.use('/',require('./routes'));

app.listen(port,function(err){
   if(err){
    console.log('Error occured : ',err);
    return;
   }
   console.log('Server started at : ',port);
 }
);