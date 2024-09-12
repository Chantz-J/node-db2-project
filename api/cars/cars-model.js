const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = () => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first()
}

async function create({}){
  // DO YOUR MAGIC
}

module.exports = {getAll, getById, create}