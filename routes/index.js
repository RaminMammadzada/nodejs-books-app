const express = require('express');
const router = express.Router();
const bookRoutes = require('./book.routes');
const authRoutes = require('./auth.Routes');

router.use('/books', bookRoutes);
router.use('/auth', authRoutes);
module.exports = router;