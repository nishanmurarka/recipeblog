const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('connected');
});

//Model
require('./Category');
require('./Recipe'); 
require('./Contact');  // why this is needed here?