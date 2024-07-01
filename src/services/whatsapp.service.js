const { response } = require('../utils/response');
const { sendTextMessage } = require('../utils/textMessage');

const sendMessage = async (info) => {
    try {
        const { toNumber, message } = info;
        const data = await sendTextMessage(toNumber, message);
        return response(200, 'Message sent', data, null);
    } catch (error) {
        console.log(error);
        return response(500, null, error.message, error);
    }
};

module.exports = { sendMessage };
