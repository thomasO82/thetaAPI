const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js')

const db = "" //path bdd a mettre ici
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(userRouter)

app.listen(3000,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Je suis connecté');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecter a la bdd");
    }
})











