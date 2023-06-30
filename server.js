require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose') 
const workoutroute = require('./routes/workouts')

//express app
const app = express ()
app.use(express.json())
 
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes

app.use('/api/workouts', workoutroute)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listening for requests here
        app.listen(process.env.PORT, () => {
            console.log('connected to the db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

