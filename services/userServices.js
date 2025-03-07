const { where } = require("sequelize");
const { model, Sequelize } = require("../models/index");
const { authHash, createToken, compareHash } = require("./auth/auth");

const login = async (value) => {
  try {
    const user = await model.user.findOne({
      where: {
        email: value.email,
      },
    });

    if (!user) {
      console.log(error);
      return "NOT FOUND!";
    } else {
      const isPasswordValid = await compareHash({
        userPass: value.password,
        dbPass: user.password,
      });

      if (isPasswordValid) {
        const role = user.role;
        const RetriveUpdate = {
          email: user.email,
          password: user.password,
          role: user.role,
        };
        const token = await createToken(RetriveUpdate);
        return { token, email: user.email, role: user.role };
      } else {
        return "Password wrong!";
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (data) => {
  try {
    const EncyPass = await authHash(data);
    const userData = { ...data, password: EncyPass };
    const FinalData = await model.user.create(userData);
    return FinalData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const getRoleByEmail = async (userEmail) => {
  console.log(`Buscando usuario con email ${userEmail}`);
  try {
    const user = await model.user.findOne({ where: { email: userEmail } });
    console.log(`Usuario encontrado: ${user}`);
    if (!user) {
      console.log(`Usuario no encontrado`);
      return { error: 'User not found', statusCode: 404 };
    }
    return { role: user.role, statusCode: 200 };
  } catch (error) {
    console.error('Error retrieving user role:', error);
    return { error: 'Internal Server Error', statusCode: 500 };
  }
};


const getAllUsers = async () => {
  try {
    const users = await model.user.findAll();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (data) => {
  try {
    const user = await model.user.findByPk(data.id);
    if (!user) {
      return null; // Usuario no encontrado
    }
    await user.update(data);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUser = async () => {};

module.exports = { login, createUser, updateUser, deleteUser, getRoleByEmail, getAllUsers };
