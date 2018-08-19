var express = require('express');
var app = express();
var bodyParser = require("body-parser");
//
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended: true}))

// Challenge 1:
// Create a GET route for "/hello" that returns the response "He
// llo!".

app.get('/hello', function(req, res) {
  res.send("Hello");
});

// Challenge 2:
// Create a POST route for "/create/:name" that returns a json object that looks l
// ike this: { "id":1, "name":"the name they pass in the route" }

app.post('/create/:name', function(req, res) {
   let guest = {"id":1,"name":req.params.name}
   console.log(guest)
   res.send(guest)
});


// Challenge 3:
// Create a GET route for "/" that returns the index.html file.

app.get('/',(req,res)=>{
  // res.render("/index.html")
  res.sendFile(__dirname+'/index.html')
});

// Challenge 4:
// Create a GET route for "/verify/:age" that checks if the age is greater than 13.
//  If it is then it sends a 200 status response (for all good). If it is not great
//  er than 13 then send a 403 status code. For more information on what status cod
//  es mean refer to this - https://developer.mozilla.org/en-US/docs/Web/HTTP/Sta
//  tus


app.get('/verify/:age',function(req,res){
  if(req.params.age>13){
    res.sendStatus(200)

  }else{
    res.sendStatus(403)
  }}
)



app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
