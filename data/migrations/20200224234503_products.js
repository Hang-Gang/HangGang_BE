
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
      table.increments()
      table.string('name').unique().notNullable()
      table.string('description')
      table.string('price')
      table.string('type')
      table.string('store_id')
      table.string('image')
      table.string('image2')
      table.string('image3')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
};
