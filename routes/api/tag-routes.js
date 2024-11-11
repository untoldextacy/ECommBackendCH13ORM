const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// GET all tags, including associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }], // Include associated products
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag by its `id`, including associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }], // Include associated products
    });

    if (!tagData) {
      res.status(404).json({ message: 'There is no category found using this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name, // Ensure request body contains tag_name
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a tag's name by its `id`
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedTag[0]) {
      res.status(404).json({ message: 'There is no category found using this id!' });
      return;
    }

    res.status(200).json({ message: 'Tag was updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a tag by its `id`
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!tagData) {
      res.status(404).json({ message: 'There is no category found using this id!' });
      return;
    }

    res.status(200).json({ message: 'Tag was deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;