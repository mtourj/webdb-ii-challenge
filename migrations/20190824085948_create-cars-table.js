
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17)
      .unique()
      .notNullable();
    tbl.string('make', 64)
      .notNullable();
    tbl.string('model', 64)
      .notNullable();
    tbl.double('mileage', 16)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.dropTableIfExists('cars');
};
