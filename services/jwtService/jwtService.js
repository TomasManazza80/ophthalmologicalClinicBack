const jwt = require('jsonwebtoken');

const JWT_SECRET = 'tu_clave_secreta'; // Asegúrate de cambiar esto por una clave secreta real

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.role; // Asumiendo que el rol está en el campo `role`
  } catch (error) {
    throw new Error('Token inválido');
  }
}

module.exports = { verifyToken };
