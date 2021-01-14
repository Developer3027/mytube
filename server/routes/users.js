const express = require('express');
const router = express.Router();

// @route   GET /users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Mytube User Info');
});

module.exports = router;
