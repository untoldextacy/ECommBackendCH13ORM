// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection');

// Initialize the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the ID field
    id: {
      type: DataTypes.INTEGER,  
      allowNull: false,         
      primaryKey: true,         
      autoIncrement: true,      
    },
    // Define the product ID field
    product_id: {
      type: DataTypes.INTEGER,  
      allowNull: false,         
      references: {
        model: 'product',       
        key: 'id',              
      },
    },
    // Define the tag ID field
    tag_id: {
      type: DataTypes.INTEGER,  
      allowNull: false,         
      references: {
        model: 'tag',           
        key: 'id',              
      },
    },
  },
  {
    sequelize,                 
    timestamps: false,         
    freezeTableName: true,     
    underscored: true,         
    modelName: 'product_tag',   
  }
);

// Export the ProductTag model
module.exports = ProductTag;
