const express = require('express');
const { getAllRoutines, getRoutineById } = require('../controllers/routines');

const router = express.Router();

// We define the endpoints for routines
router.get('/', getAllRoutines);
router.get('/:id', getRoutineById);
router.post('/');
router.put('/:id');
router.delete('/:id');

module.exports = router;
