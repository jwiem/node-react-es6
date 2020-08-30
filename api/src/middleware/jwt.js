/**
 * Auth0 JWT middleware.
 * checkJWT is passed as a param:
 * i.e. app.get("/", checkJWT, (req, res)
 *
 * https://auth0.com/docs/quickstart/backend/nodejs/01-authorization#protect-api-endpoints
 */
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://someurl.auth0.com/'
  }),
  audience: 'https://yourdomain.com',
  issuer: 'https://someurl.auth0.com',
  algorithms: ['RS256']
});

module.exports = checkJwt;