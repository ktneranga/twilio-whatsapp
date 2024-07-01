const express = require('express');
const router = express.Router();
const whatsappRoutes = require('./whatsapp');
require('dotenv').config();

router.get(`${process.env.API_VERSION_PREFIX}/health`, (req, res) => res.status(200).json('Server is running...'));
router.use(`${process.env.API_VERSION_PREFIX}/whatsapp`, whatsappRoutes);

module.exports = router;
