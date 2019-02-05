var express = require('express')
var userRouter = express.Router()
var objectId = require('mongodb').ObjectID

userRouter.get('/',(req,res)=>{
    var id = req.headers.id;
    id = new objectId(id)
    var collection = req.db.collection('instagram')
    collection.findOne({_id: id}, {projection: {password: 0}}, (err,LoginUser)=>{
       if(err) throw err;
       res.send(JSON.stringify(LoginUser))
    })
})

module.exports = userRouter