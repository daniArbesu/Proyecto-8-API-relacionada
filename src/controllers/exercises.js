const { Exercise } = require('../models/mongo');

const getAllExercises = async (req, res) => {
  const exercises = await Exercise.find({});
  res.status(200).json({ data: exercises });
};

const getExerciseById = async (req, res) => {
  const { id } = req.params;
  const exercise = await Exercise.findById(id);
  res.status(200).json({ data: exercise });
};

const createExercise = async (req, res) => {
  const newExercise = new Exercise({
    name: req.body.name,
    type: req.body.type,
    primary_muscles: req.body.primary_muscles,
    url: req.body.url
  });

  await newExercise.save();
  res.status(201).json({ data: newExercise });
};

const updateExercise = async (req, res) => {
  const { id } = req.params;
  const exercise = await Exercise.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      type: req.body.type,
      primary_muscles: req.body.primary_muscles,
      url: req.body.url
    },
    { new: true }
  );
  res.status(200).json({ data: exercise });
};

const deleteExercise = async (req, res) => {
  const { id } = req.params;
  const exercise = await Exercise.findByIdAndDelete(id);
  res.status(200).json({ data: exercise });
};

module.exports = {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise
};
