
exports.up = function(knex) {
  return knex.schema.createTable('class', function(table){
    table.increments('id').primary();
    table.timestamp('data');
    table.string('qrcode').notNullable();
  }
  )};

exports.down = function(knex) {
  return knex.schema.dropTable('class');
};
