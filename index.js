// import express from 'express'
const express = require('express');
const cors = require('cors')

// create an express application
let app = express();

// app.use() is to add extra functionality
// concept is known as middleware

// add in the functionality to process JSON data
// by default, Express cannot process JSON data and cannot send back JSON data
app.use(express.json());
app.use(cors());

// HTTP: get, post, patch, put, delete
// request will have the HTTP request
// response can be used to send back the response
app.get('/', function(request, response){
    // send back the HTTP response <h1>hello world</h1>
    response.send("<h1>Hello World</h1>")
})

app.get('/about-us', function(request, response){
    let luckyNumber = Math.floor(Math.random() * 1000);    
    response.send('<h1>About Us</h1><h2>Your lucky number is ' + luckyNumber + '</h2>')
})

// placeholders
app.get('/hello/:name', function(req,res){
    // req.params is fixed by Express
    let name = req.params.name;
    res.send("Hi, " + name);
})

// add two numbers together
app.post("/addtwo", function(req,res){
    let n1 = req.body.number1;
    let n2 = req.body.number2;
    res.json({
        'sum': n1 + n2
    })
})

// start the application at port 3000
app.listen(3000, function(){
    console.log("Server started")
} )