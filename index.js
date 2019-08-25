const express = require('express');

const app = express();

app.use(express.json());

const carsRoute = require('./routes/cars');

// Stuff
app.use('/api/cars', carsRoute);

app.listen(80, () => {
  console.log("Server listening on port 80...");
})