var express = require('express')
var authRouter = express.Router()

authRouter.post('/signup',(req,res)=>{
    const {email, fullname, username, password} = req.body
    var collection = req.db.collection('instagram')
      collection.insert({email,fullname,username,password},(err, result)=>{
            res.send(JSON.stringify(''))
      })
})

authRouter.post('/login',(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    var collection = req.db.collection('instagram')
    collection.findOne({username, password},{projection: {passsword: 0}},(err, user)=>{
       if(err) throw err;
       if(user){
          res.send(JSON.stringify(user))
       }
       else {
          res.status(401).send('User Not found')
       }
    }) 
})

module.exports = authRouter