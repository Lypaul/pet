const expressJwt = require("express-jwt");
const { secret } = require('./encrypt');
const jwtAuth = expressJwt({
    secret: secret,
    credentialsRequired: true // false：不校验
}).unless({
    path: ['/user/login', '/user/reg', '/admin/reg', '/admin/login']
});
module.exports = jwtAuth;