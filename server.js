const express = require('express');
const apiRoutes = require('./routes/index');
const sequelize = require('./config/connection'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routes
app.use('/api', apiRoutes);

// Middleware to handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
