const express = require("express");
const bodyParser = require("body-parser");
var path= require('path');
const app =express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json())
const mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://wajdi:VmlmgPcPdeZw1Qpf@cluster0.ljpvw.mongodb.net/ip?retryWrites=true&w=majority").then(()=>{
    console.log("Successfully connected");
}).catch(err =>{
    console.log('Could not connect to the database. Exiting!!!',err);
    process.exit();
})
app.get('/', (req,res) =>{
    res.json({"message":"welcome to ipnotizer"});
});

require('./routes/user.routes')(app);





app.listen(process.env.PORT||3001,()=>{
    console.log("Server is listening on port 3001");
})