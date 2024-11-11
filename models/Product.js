// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // Define an auto-incrementing integer column
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      // Define a string column for product name
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      // Define a decimal column for product price
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        // Ensure the price is a positive number
        isDecimal: true,
      },
    },
    stock: {
      // Define an integer column for stock quantity
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        // Ensure the stock is a non-negative integer
        isInt: true,
        min: 0,
      },
    },
    category_id: {
      // Define a foreign key that references the Category model
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // refers to the category model
        key: 'id',         // references the 'id' column in the category model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
