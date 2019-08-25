const knex = require('knex');
const database = require('./dbConfig');

const find = () => {
  return database('cars');
}

const insert = car => {
  return database('cars').insert(car);
}

module.exports = {
find,
insert
}