// STRETCH
exports.seed = function(knex){
    //This command deletes all existing entires
    return knex('cars').truncate()
    .then(function () {
        //Then inser entries 
        return knex('cars').insert([
            {vin: 1010101010101010, make: 'Kia', model: 'Soul', mileage: 250.000, title: 'Carvana', transmission: 'car tingz'}
        ])
    })
}