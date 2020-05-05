exports.up = function(knex) {
  knex.schema.createTable('teachers', function(table){
      table.increments('id').primary();
      table.string('fullname').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('avatar');
      table.enum('rank', ['admin', 'teacher']).defaultTo('teacher');
  });
  knex.schema.createTable('students', function(table){
      table.increments('id').primary();
      table.string('fullname').notNullable();
      table.integer('ra').notNullable();
      table.string('password').notNullable();
      table.string('avatar');
  });
  knex.schema.createTable('class', function(table){
      table.increments('id').primary();
      table.timestamp('data');
      table.string('qrcode').notNullable();
  });
  knex.schema.createTable('frequency', function(table){
      table.increments('id').primary();
      table.foreign('student_id').references('id').inTable('students');
      table.foreign('class_id').references('id').inTable('class');
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('teachers');
  knex.schema.dropTable('students');
  knex.schema.dropTable('class');
  knex.schema.dropForeign('frequency',['class_id', 'student_id']);
};
