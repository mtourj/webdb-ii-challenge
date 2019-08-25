
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1ZBVSUCKMYASS2', make: "Ford", model: "Mustang", mileage: 80000},
        {vin: '1ZBVIMDYING5', make: "Chevy", model: "Cruze", mileage: 50000},
      ]);
    });
};
