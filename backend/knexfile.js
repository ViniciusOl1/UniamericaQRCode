// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'ec2-3-222-150-253.compute-1.amazonaws.com',
      user : 'fufpcfmtandfoh',
      password : '09e2c799b08aa8bb6f3a492903ee44ca570fe91ee9e3d682c6476ea61be6006e',
      database : 'dccdh4r2kas70v'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
