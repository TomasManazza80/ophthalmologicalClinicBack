const userService = require("../services/userServices");
const AllValidation = require("../validation/AllValidation");

const auth = require('../validation/AllValidation');

async function getUserInfo(req, res) {
  const token = req.headers.authorization;
  const decoded = await auth.decodeToken(token);
  if (decoded) {
    const role = decoded.role;
    // Utiliza el rol para controlar qué secciones de la página se muestran
    if (role === 'admin') {
      // Muestra secciones de administrador
      res.render('adminDashboard');
    } else if (role === 'user') {
      // Muestra secciones de usuario
      res.render('userDashboard');
    } else {
      // Muestra secciones de invitado
      res.render('guestDashboard');
    }
  } else {
    res.status(401).json({ error: 'Token inválido' });
  }
}


const loginUser = async (req, res) => {
  try {
    const userdata = req.body;
    const { value, error } = AllValidation.fatchUser.validate(userdata);
    if (error !== undefined) {
      console.log("error", error);
      res.status(400).send(error.details[0].message);
    } else {
      const response = await userService.login(value);
      if (response === "NOT FOUND!" || response === "Password wrong!") {
        res.status(401).send(response);
      } else {
        const role = response.role;
        if (role === 'admin') {
          res.send({ token: response.token, email: response.email, role: 'admin' });
        } else {
          res.send({ token: response.token, email: response.email, role: 'user' });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const createUser = async (req, res) => {
  try {
    const userdata = req.body;
    const { value, error } = AllValidation.createUser.validate(userdata);
    if (error !== undefined) {
      console.log("error", error);
      res.status(400).send(error.details[0].message);
    } else {
      const user = await userService.createUser(value);
      if (!user) {
        res.sendStatus(401);
      } else {
        res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const getRole = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const response = await userService.getRoleByEmail(userEmail);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};



const updateUser = async (req, res) => {
  try {
    const userdata = req.body;
    const { value, error } = AllValidation.updateUser.validate(userdata);
    if (error !== undefined) {
      console.log("error", error);
      res.status(400).send(error.details[0].message);
    } else {
      const response = await userService.updateUser({ id: req.params.id, ...value });
      if (!response) {
        res.sendStatus(404); // Usuario no encontrado
      } else {
        res.sendStatus(200); // Usuario actualizado con éxito
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};




const deleteUser = async (req, res) => {};

module.exports = { loginUser, createUser, updateUser, deleteUser, getRole, getAllUsers };
