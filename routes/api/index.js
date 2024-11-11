const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Define the base routes for each resource
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Handle 404 for routes that do not exist
router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
