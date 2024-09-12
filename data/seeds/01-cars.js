// STRETCH
exports.seed = function(knex){
    //This command deletes all existing entires
    return knex('cars').truncate()
    .then(function () {
        //Then inser entries 
        return knex('cars').insert([
            {vin: 1010101010101010, make: 'Kia', model: 'Soul', mileage: 250000.000, title: 'Carvana', transmission: 'car tingz'},
            {vin: 1011101010101010, make: 'Kia', model: 'Sportage', mileage: 30050.000, title: 'Carvana', transmission: 'fiJUTYSGj1'}
        ])
    })
}