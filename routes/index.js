const router = require('express').Router();
const apiRoutes = require('./api');

router.use(apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
