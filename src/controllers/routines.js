const { Routine } = require('../models/mongo');

const getAllRoutines = async (req, res) => {
  const routines = await Routine.find({})
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

  res.status(200).json({ data: routines });
};

const getRoutineById = async (req, res) => {
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

module.exports = { getAllRoutines, getRoutineById };
