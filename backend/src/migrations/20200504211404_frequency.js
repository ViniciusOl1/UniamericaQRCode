
exports.up = function(knex) {
  return knex.schema.createTable('frequency',function(table){
    table.increments('id').primary();
    table.integer('student_id').unsigned();
    table.integer('class_id').unsigned();
    table.foreign('student_id').references('id').inTable('students');
    table.foreign('class_id').references('id').inTable('class');

  }
  )};

exports.down = function(knex) {
  return knex.schema.dropForeign('frequency',['class_id','student_id']);
};
