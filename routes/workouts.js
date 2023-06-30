const express = require('express')


const Workout = require('../models/workoutmodel')
const { createWorkout,updateWorkout,getWorkout,getWorkouts,deleteWorkout } = require('../controllers/control')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)



router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router