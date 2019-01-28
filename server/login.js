const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./users.json')
const app = express()
app.use(bodyParser.json())
app.use(cors());

app.post('/login',(req, res)=>{
   // res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
   const username = req.body.username;
   const password = req.body.password;
   var loginUser = users.find((user)=>{
      return username === user.username && password === user.password;
   })
   res.send(JSON.stringify(loginUser))
})

app.get('/me',(req, res)=>{
   var id = req.query.id;
   var loginUser = users.find((user)=>{
      return parseInt(id) === user.id;
   })
   res.send(JSON.stringify(loginUser))
})


app.listen(9090,()=>{console.log("Serving at port 9090...")})
// const http = require('http');
// const users = require('./users.json');
// const querystring = require('querystring');

// const server = http.createServer(function (req, res) {

//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

//    if (req.url.substring(0, 6) === "/login") {
//       //    decodeURIComponent(req.url)
//       var splittedurl = req.url.split("?");
//       console.log('splittedurl', splittedurl);
//       var params = querystring.parse(splittedurl[1]);
//       console.log('params', params)
//       console.log('UserName', params.username);
//       console.log('password', params.password);
//       const username = params.username;
//       const password = params.password;
//       var loginUser = users.find((user) => {
//          return username === user.username && password === user.password;
//       });
//       if (loginUser) {
//          res.writeHead(200, { 'Content-Type': 'text/plain' });
//          return res.end(JSON.stringify(loginUser));
//       }
//    }
//    if (req.url.substring(0,3) === "/me"){
//       var splitUrl = req.url.split("?");
//       console.log("splitUrl", splitUrl);
//       var parameter = querystring.parse(splitUrl[1]);
//       const id = parameter.id;
//       var loginUser  = users.find((user) => {
//          return parseInt(id) === user.id;
//       });
//       if (loginUser) {
//          res.writeHead(200, { 'Content-Type': 'text/plain' });
//          return res.end(JSON.stringify(loginUser));
//       }
//    }

//    res.statusCode = 403;
//    res.end("Invalid user");
// })
// server.listen(9090);
