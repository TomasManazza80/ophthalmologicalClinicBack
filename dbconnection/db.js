const { Sequelize } = require('sequelize');

const DATABASE = process.env.DB_NAME || 'clinicaoftalmologia';
const USERNAME = process.env.DB_USER || 'postgres';
const PASSWORD = process.env.DB_PASS || 'FYsYPWZQkobnGUQD60Yi2BgSvIEHeBq9';
const HOST = process.env.DB_HOST || 'dpg-cv5l653qf0us73eot9hg-a.oregon-postgres.render.com';
const PORT = process.env.DB_PORT || 5432;
const DIALECT = 'postgres';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false,
  native: false,
  connectionTimeout: 30000
});

sequelize.connectionManager.getConnection().then((connection) => {
  console.log(connection.state); // verifica el estado de la conexión
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

testConnection();

module.exports = sequelize;