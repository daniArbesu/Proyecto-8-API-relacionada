/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
// Mongo DB
const mongoose = require('mongoose');

const MONGO_PORT = 27018;
const MONGO_DB = 'fitness';

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose
  .connect(`mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => {
    console.log('>> Connected to DB!');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err);
    process.exit(1);
  });
