const express = require('express');
const {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
  getExerciseByIdAndPopulate,
  updateRoutineFromExercise
} = require('../controllers/exercises');

const router = express.Router();

// We define the endpoints for exercises
router.get('/', getAllExercises);
router.get('/:id', getExerciseById);
router.get('/populate/:id', getExerciseByIdAndPopulate);
router.post('/', createExercise);
router.put('/:id', updateExercise);
router.put('/:id/update-routine', updateRoutineFromExercise);
router.delete('/:id', deleteExercise);

module.exports = router;
