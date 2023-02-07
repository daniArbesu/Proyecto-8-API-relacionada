/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const mongoose = require('mongoose');
const { Routine } = require('../models/mongo');

const getAllRoutines = async (req, res) => {
  const routines = await Routine.find({}).lean();

  res.status(200).json({ data: routines });
};

const getRoutineById = async (req, res) => {
  const { id } = req.params;
  const routine = await Routine.findById(id).lean();

  res.status(200).json({ data: routine });
};
const getRoutineByIdAndPopulate = async (req, res) => {
  const { id } = req.params;
  const routine = await Routine.findById(id)
    .populate({
      path: 'exercises',
      model: 'Exercise',
      select: {
        name: true,
        type: true,
        primary_muscles: true,
        url: true
      }
    })
    .lean();

  res.status(200).json({ data: routine });
};

const createRoutine = async (req, res) => {
  const newRoutine = new Routine({
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
    exercises: req.body.exercises
  });

  await newRoutine.save();
  res.status(201).json({ data: newRoutine });
};

const updateRoutine = async (req, res) => {
  const { id } = req.params;
  const routine = await Routine.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      sets: req.body.sets,
      reps: req.body.reps,
      exercises: req.body.exercises
    },
    { new: true }
  );

  res.status(200).json({ data: routine });
};

const updateExercisesFromRoutine = async (req, res) => {
  const { id } = req.params;
  const { exercise } = req.body;
  const exerciseId = mongoose.Types.ObjectId(exercise);

  let routine;

  routine = await Routine.findOneAndUpdate(
    { _id: id, exercises: exerciseId },
    {
      $pull: {
        exercises: exerciseId
      }
    },
    { new: true }
  );

  // We check if the query found something, if not we add the exercise
  if (!routine) {
    routine = await Routine.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          exercises: exerciseId
        }
      },
      { new: true }
    );
  }

  res.status(200).json({ data: routine });
};

const deleteRoutine = async (req, res) => {
  const { id } = req.params;
  const routine = await Routine.findByIdAndDelete(id);
  res.status(200).json({ data: routine });
};

module.exports = {
  getAllRoutines,
  getRoutineById,
  getRoutineByIdAndPopulate,
  createRoutine,
  updateRoutine,
  updateExercisesFromRoutine,
  deleteRoutine
};
