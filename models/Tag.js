// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize the Tag model by extending Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for the Tag model
Tag.init(
  {
    // Define the ID field
    id: {
      type: DataTypes.INTEGER,  
      allowNull: false,         
      primaryKey: true,        
      autoIncrement: true,      
    },
    // Define the tag name field
    tag_name: {
      type: DataTypes.STRING,   
      allowNull: false,         
    },
  },
  {
    sequelize,                 
    timestamps: false,         
    freezeTableName: true,     
    underscored: true,         
    modelName: 'tag',          
  }
);

// Export the Tag model
module.exports = Tag;
