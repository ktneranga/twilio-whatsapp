const whatsappServices = require('../services/whatsapp.service');

const sendMessage = async (req, res) => {
    const { body } = req;
    const data = await whatsappServices.sendMessage(body);
    res.status(data.statusCode).json(data);
};

module.exports = { sendMessage };
