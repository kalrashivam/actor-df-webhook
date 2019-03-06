var express = require("express");
var bodyparser = require("body-parser");
var admin = require('firebase-admin');

var app =express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// To remove Cors error for cross platform queries
app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

port = 8080;

app.listen(port, ()=> {
    console.log(`running on port no. ${port}`)
})

app.get('/actor/ping', (req,res) => {
    res.status(200).send('{"data":"pong"}');
})

app.get('/actor/addquestion/:question', (req,res) => {
    params = req.params;
    console.log(params);
    res.status(200).send();
})

app.post('/actor/addanswers', (req,res) => {
    body = req.body;
    console.log(body.answers);
    res.send('{"data":"got the answers successfully"}')
});

app.get('/actor/correctanswer/:correct', (req,res) => {
    params = req.params;
    console.log(params);
    res.status(200).send(`{"data":"${params.correct}"}`)
})