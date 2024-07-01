const serverless = require('serverless-http');
const express = require('express');
const app = express();
const { errors } = require('celebrate');
const routes = require('./src/routes/index');
const bodyParser = require('body-parser');

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use(errors());

const PORT = process.env.PORT || 4000;

module.exports.handler = serverless(app);
// app.listen(PORT, () => console.log('Server is runnig on port', PORT));
