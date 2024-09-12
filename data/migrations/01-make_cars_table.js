// DO YOUR MAGIC
exports.up = function(knex){
// the change being made in schema
    return knex.schema.createTable("cars", table => {
        table.increments() //creates auto incrementing primary key
        table.text('vin', 17).unique().notNullable()
        table.text('make').notNullable()
        table.text('model').notNullable()
        table.decimal('mileage').notNullable()
        table.text('title')
        table.text('transmission')
    })
}

exports.down = function(knex){
// undoing that change
    return knex.schema.dropTableIfExists('cars')
}
