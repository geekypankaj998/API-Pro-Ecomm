const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/eCommDB');

const db =  mongoose.connection;

db.on('error',function(err){
  console.log("error occured dusring setup of MongoDB");
  return;
});

db.once('open',function(err){
  console.log("DB setup done");
  return;
});
module.exports = db;