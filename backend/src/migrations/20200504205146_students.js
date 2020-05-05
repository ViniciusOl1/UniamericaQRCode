
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table){
    table.increments('id').primary();
    table.string('fullname').notNullable();
    table.string('ra').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();

  }
  )};

exports.down = function(knex) {
  return knex.schema.dropTable('student');
};
