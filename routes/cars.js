const express = require('express');

const router = express.Router();

const database = require('../data/dbHelper');

router.get('/', (req, res) => {
  database.find()
  .then(cars => {
    if(cars.length === 0){
      return res.status(404).json({message: "The car with the specified ID does not exist."});
    } else res.status(200).json(cars);
  })
  .catch(err => {
    return res.status(500).json({message: "There was a problem retrieving the specified car."});
  })
});

router.post('/', (req, res) => {
  const {vin, make, model, mileage, transmission, title} = req.body;
  if(!vin || !vin.trim() || !make || !make.trim() || !model || !model.trim() || !mileage) {
    return res.status(400).json({message: "Please make sure to include 'vin', 'make', 'model' and 'mileage' fields. 'transmission' and 'title' fields are optional."});
  }

  const car = {
    vin,
    make,
    model,
    mileage,
    transmission,
    title
  }

  database.insert(car)
  .then(id => {
    car.id = id[0];
    return res.status(201).json(car);
  })
  .catch(err => {
    return res.status(500).json({message: "There was a problem adding the new car."});
  })

});

module.exports = router;