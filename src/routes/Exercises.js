const express = require('express');
const {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise
} = require('../controllers/exercises');

const router = express.Router();

// We define the endpoints for exercises
router.get('/exercises', getAllExercises);
router.get('/exercises/:id', getExerciseById);
router.post('/exercises', createExercise);
router.put('/exercises/:id', updateExercise);
router.delete('/exercises/:id', deleteExercise);

module.exports = router;
