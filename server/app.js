const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const users = require('./users.json')
const app = express()
app.use(bodyParser.json())
app.use(cors());
var MongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectID
var url = 'mongodb://localhost:27017/twinkle';
var userRoutes = require('./user/usersRoutes.js')
var authRoutes = require('./auth/authRoutes.js')
var multer = require('multer')
var upload = multer({ dest: './uploads'})
app.use(express.static("./uploads"))

var db = null;
app.use(
   function middleware1 (req,res,next) {
      if(db == null) {
         MongoClient.connect(url,(err, client)=>{
            if(err) throw err
            db = client.db('twinkle')
            req.db = db;
            next()
         })
      }
      else{
         req.db = db;
         next()
      }
   }
)

app.use("/auth",authRoutes)

app.use(
   function middleware2 (req,res,next) {
      if(req.headers.id){
         var id = req.headers.id;
         id = new objectId(id)
         var collection = req.db.collection('instagram')
         collection.findOne({_id: id}, {projection: {password: 0}}, (err,loginUser)=>{
            if(err) throw err;
            if(loginUser){
               req.user = loginUser;
            next()
            }
            else {
               res.status(401).send('user not Found')
            }
         })
      }
      else {
         res.status(401).send('user not Found')
      }
   }
)
app.use("/user", userRoutes)
app.post('/upload',upload.single('profilePic'), function(req,res,next) {
   console.log("req.file", req.file)
   var collection = req.db.collection('instagram')
   collection.update({_id: req.user._id},{$set: {profilePic: req.file.filename}},(err,n) => {
      console.log(n,"%%%%%%%%")
      if(err) throw err;
      req.user.profilePic = req.file.filename;
      res.json(req.user)
   })   
})

// app.post('/login',(req, res)=>{
//    // res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
//    const username = req.body.username;
//    const password = req.body.password;
//    MongoClient.connect(url,(err, client)=>{
//       if(err) throw err;
//       const db = client.db('twinkle')
//       var collection = db.collection('instagram')
//       collection.findOne({username, password},{projection: {passsword: 0}},(err, user)=>{
//          if(err) throw err;
//          if(user){
//             res.send(JSON.stringify(user))
//          }
//          else {
//             res.status(401).send('User Not found')
//          }
//          client.close();
//       })   
//    })
   // var loginUser = users.find((user)=>{
   //    return username === user.username && password === user.password;
   // })
   // res.send(JSON.stringify(loginUser))
// })

// app.get('/me',(req, res)=>{
//    var id = req.query.id;
//    id = new objectId(id)
//    MongoClient.connect(url,(err, client)=>{
//       if(err) throw err;
//       const db = client.db('twinkle')
//       var collection = db.collection('instagram')
//       collection.findOne({_id: id}, {projection: {password: 0}}, (err,LoginUser)=>{
//          if(err) throw err;
//          res.send(JSON.stringify(LoginUser))
//          client.close();
//       })
//    })
   // var loginUser = users.find((user)=>{
   //    return parseInt(id) === user.id;
   // })
   // res.send(JSON.stringify(loginUser))
// })

// app.post('/signup', (req, res)=>{
//    const email = req.body.email;
//    const fullname = req.body.fullname;
//    const username = req.body.username;
//    const password = req.body.password;
//    // const fullName = `${firstName} ${lastName}`;
//    MongoClient.connect(url,(err, client)=>{
//       //console.log(err, db.collection);
//       if(err) throw err;
//       const db = client.db('twinkle')
//       var collection = db.collection('instagram')
//       collection.insert({email,fullname,username,password},(err, result)=>{
//          // collection.find({firstName: {firstName}}).toArray((err, docs)=>{
//          //    console.log('docs[0]&docs[1]',docs[0]+ docs[1])
//             res.send(JSON.stringify(''))
//             client.close();
//       })
      // console.log("Connection established between Node and Mongodb", db)
      // res.send(JSON.stringify(fullName))
//    })
// })

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
