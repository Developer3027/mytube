const express = require('express');
const router = express.Router();

// @route   GET /posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Mytube Post Test');
});

module.exports = router;
