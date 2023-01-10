const express = require("express");
const UserModel = require('../models/user.js')
const userRouter = express.Router()

userRouter.get('/users',async (req, res)=>{
   let users = await UserModel.find();
   res.send(users)
})

userRouter.get('/user/:id',async (req, res)=>{
  let user = await UserModel.findOne({_id: req.params.id})
  res.send(user)
})

userRouter.delete('/user/:id',async (req, res)=>{
     await UserModel.deleteOne({_id: req.params.id})
    res.send("utilisateur supprimer")
  })
  

userRouter.post('/user',async (req, res)=>{
   let newUser = new UserModel(req.body)
   await newUser.save()
   res.send('utilisateur sauvegarder')
})

userRouter.put('/user/:id',async (req, res)=>{
   await UserModel.updateOne({_id: req.params.id}, req.body)
   res.send("utilisateur modifié")
 })


 userRouter.post('/user/login', async (req,res)=>{
    let user = await UserModel.findOne({mail: req.body.mail, password: req.body.password})
    if (user) {
        res.send("connecté")
    }else{
        res.send("pas connecté")
    }

 })




module.exports = userRouter


