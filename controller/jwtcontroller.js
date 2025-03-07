const jwtService = require('../services/jwtService/jwtService');

function getRole(req, res) {
  const token = req.headers.authorization.split(' ')[1]; // Asumiendo que el token está en el encabezado de autorización en formato Bearer
  try {
    const role = jwtService.verifyToken(token);
    res.status(200).json({ role });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}

module.exports = { getRole };
