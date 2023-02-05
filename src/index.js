/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const express = require('express');
require('./config/db');
const exercisesRouter = require('./routes/Exercises');

const app = express();
app.use(express.json());

app.use('/api', exercisesRouter);

// Handle Client Side Errors
app.use('*', (req, res) => {
  res.status(401).json({ data: 'Not found' });
});

// Handle Server Errors
app.use((error, req, res) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`>> Server running on: http://localhost:${PORT}`);
});
