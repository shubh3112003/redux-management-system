const express = require("express");  //package eken gnnw
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070; //pc eke port ekt server eka connect wenna port num eka

app.use(cors());  //meka use krnna kiyl app.use eken wenne
app.use(bodyParser.json());

mongoose.set("strictQuery", false);
const URL = process.env.MONGODB_URL;

/*
mongoose.connect(URL, {
   
    useCreateIndex :true,
    useNewUrlParser: true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
   
});

//check the connection successful 
//() => kiynne function ekkta dna ekk

const connection =mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Successful!");
})

*/
mongoose.connect(URL,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


const studentRouter = require("./routes/students.js");

//http:localhost:8070/student   //backend eke url eka

app.use("/student",studentRouter);
// '/student' kiyla arn tiyenne url eke anthima eka






app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})