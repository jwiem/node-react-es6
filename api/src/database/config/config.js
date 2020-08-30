require("dotenv").config();

module.exports = {
  development: {
    url: 'localhost',
    database: 'bookdb',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};