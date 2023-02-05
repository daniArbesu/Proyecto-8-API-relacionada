const express = require('express');

const router = express.Router();

// We define the endpoints for routines
router.get('/routines');
router.get('/routines/:id');
router.post('/routines');
router.put('/routines/:id');
router.delete('/routines/:id');

module.exports = router;
