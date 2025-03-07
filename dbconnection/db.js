const { Sequelize } = require('sequelize');

const DATABASE = process.env.DB_NAME || 'visage';
const USERNAME = process.env.DB_USER || 'postgres';
const PASSWORD = process.env.DB_PASS || 'password';
const HOST = process.env.DB_HOST || '127.0.0.1';
const PORT = process.env.DB_PORT || 5432;
const DIALECT = 'postgres';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: DIALECT,
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false // Muy importante en desarrollo
    } : false,
  },
  logging: false,
  native: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();

module.exports = sequelize;
