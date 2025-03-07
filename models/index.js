const user = require("./users/user");
const cart = require("./carts/cart");
const inicioCard = require("./inicio/inicioCard");
const category = require("./categories/categ");
const product = require("./products/product");
const ProductBought = require("./productBougth/productBougth");

const Sequelize = require("../dbconnection/db");
const doctores = require("./doctores/doctores");
const doctoresCard = require("./doctores/doctoresCard");
const servicios = require("./servicios/services");
const serviciosCard = require("./servicios/serviceCard");
const cirugias = require("./cirugias/cirugias");
const cirugiasCard = require("./cirugias/cirugiasCard");
const aboutUs = require("../models/aboutUs/aboutUs");
const aboutUsCard = require("../models/aboutUs/aboutUsCard");
const gallery = require("../models/gallery/gallery");
const galleryCard = require("../models/gallery/galleryCard");



const inicio = require("./inicio/inicio");


aboutUs.hasMany(aboutUsCard, {onDelete: "CASCADE"});



gallery.hasMany(galleryCard, {onDelete: "CASCADE"});
servicios.hasMany(serviciosCard, {onDelete: "CASCADE"});

doctores.hasMany(doctoresCard, {onDelete: "CASCADE"});

cirugias.hasMany(cirugiasCard, {onDelete: "CASCADE"});



inicio.hasMany(inicioCard, {onDelete: "CASCADE"});
user.hasMany(cart, { onDelete: "CASCADE" });
cart.belongsTo(user, { onDelete: "CASCADE" });


category.hasMany(product, { onDelete: "CASCADE" });
product.belongsTo(category, { onDelete: "CASCADE" });

product.belongsToMany(cart, {
  onDelete: "CASCADE",
  through: "Product_cart",
  foreignKey: {
    name: "ProductID",
    allowNull: false,
    unique: true,
  },
});
cart.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "Product_cart",
  foreignKey: {
    name: "ProductID",
    allowNull: false,
    unique: true,
  },
});

product.hasMany(ProductBought, { onDelete: "CASCADE" });
ProductBought.belongsTo(product, { onDelete: "CASCADE" });

const model = Sequelize.models;

module.exports = { model, Sequelize };
