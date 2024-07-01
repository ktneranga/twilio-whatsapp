const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/whatsapp.controller');

router.post('/send-message', sendMessage);

module.exports = router;
