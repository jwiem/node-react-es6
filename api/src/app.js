const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const _ = require('lodash');
const { Client } = require('pg');
const checkJwt = require('./middlewares/jwt');

import protocolRoutes from './routes/ProtocolRoutes';

const app = express();

app.set('port', process.env.PORT || 3001);

dotenv.config({ path: '.env' });

app.use(helmet());
app.use(morgan('combined'));
app.use(cors());

// var corsOptions = {
//   origin: 'http://some.url.com',
//   optionsSuccessStatus: 200
// };

/**
 * use bodyParser to parse application/json content-type
 * Plus Addition Express configuration
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(checkJwt);

// ES5 syntax routes
app.use('/medications', require('./routes/medications'));
app.use('/prescriptions', require('./routes/prescriptions'));

// ES6 syntax routes
app.use('/protocols', protocolRoutes);

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

// Auth0 API token check
app.get('/api/external', checkJwt, (req, res) => {
  console.log("Receive user_id from client: " + req.user.sub);
  res.send({
    msg: 'Your Access Token was successfully validated!'
  });
});

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;