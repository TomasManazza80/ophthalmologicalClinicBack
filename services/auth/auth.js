const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid token." });
  }
};



async function decodeToken(token) {
  console.log("token!!!!!!:", token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return {
      ...decoded,
      role: decoded.role, // Agrega el campo role al objeto decoded
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function authHash(argu) {
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(argu.password, salt);
  console.log("hashPassword!:", hashpassword);
  return hashpassword;
}

async function compareHash(Pass) {
  try {
    const res = await bcrypt.compare(Pass.userPass, Pass.dbPass);
    return res;
  } catch (err) {
    console.log("Error comparing passwords:", err);
    throw err;
  }
}

async function createToken(argu) {
  console.log("MYARGU:", argu);
  const token = await jwt.sign({
    email: argu.email,
    password: argu.password,
    nombre: argu.nombre,
    apellido: argu.apellido,
    rol: argu.rol
  }, "mysecretkeyofcreatingtoken", {
    expiresIn: 604800,
  });
  console.log("TOKEN FROM AUTH!", token);
  return token;
}

module.exports = { authMiddleware, authHash, createToken, compareHash, decodeToken };
