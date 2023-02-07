const express = require('express');
const {
  getAllRoutines,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  getRoutineByIdAndPopulate,
  updateExercisesFromRoutine
} = require('../controllers/routines');

const router = express.Router();

// We define the endpoints for routines
router.get('/', getAllRoutines);
router.get('/:id', getRoutineById);
router.get('/populate/:id', getRoutineByIdAndPopulate);
router.post('/', createRoutine);
router.put('/:id', updateRoutine);
router.put('/:id/update-exercise', updateExercisesFromRoutine);
router.delete('/:id', deleteRoutine);

module.exports = router;
