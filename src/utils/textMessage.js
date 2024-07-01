require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendTextMessage = async (toNumber, message) => {
    console.log('toNumber================', toNumber);
    console.log('message================', message);
    try {
        const data = await client.messages
            .create({
                from: `whatsapp:${process.env.TWILIO_FROM_PHONE_NUMBER}`,
                body: message,
                to: `whatsapp:${toNumber}`,
            })
            .then((message) => console.log(message.sid));
        return data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sendTextMessage };
