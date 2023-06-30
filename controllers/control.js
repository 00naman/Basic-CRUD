const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')

//get workouts
const getWorkouts = async(req,res) => {

    const workout = await Workout.find({}).sort({createdAt: -1})   
    res.status(200).json(workout)

    }


// get one workout
const getWorkout = async(req,res) => {
   const { id } = req.params
   
   if(!mongoose.isObjectIdOrHexString(id)) {
    return res.status(404).json({error: 'no such workout'})
   }

   const workout = await Workout.findById(id)
   res.status(200).json(workout)

   if(!workout) {
    return res.status(404).json({error: 'no such workout'})
   }

}


// create a workout
const createWorkout = async(req,res) => {
    const{title,load,reps} = req.body

    try{
        const workout = await Workout.create({title, load , reps})
        res.status(200).json(workout)
    } catch(error) {
      res.status(404).json({error: error.message})   
    }
}

// delte a workout 
const deleteWorkout = async(req,res) => {
const { id } = req.params
   
if(!mongoose.isObjectIdOrHexString(id)){
 return res.stats(404).json({error: 'no such workout'})
}

const workout = await Workout.findOneAndDelete({_id : id})
res.status(200).json(workout)

if(!workout) {
 return res.status(404).json({error: 'no such workout'})
}
}

   

// update a workout
const updateWorkout = async(req,res) => {
    const { id } = req.params
       
    if(!mongoose.isObjectIdOrHexString(id)){
     return res.stats(404).json({error: 'no such workout'})
    }
    
    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    res.status(200).json(workout)
    
    if(!workout) {
     return res.status(404).json({error: 'no such workout'})
    }
    }
    
       



module.exports = {
    createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout
}