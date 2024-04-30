const jwt = require('jsonwebtoken');
const secret = "unbe$sercetT"

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, secret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        res.locals.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
};


module.exports = {
  authenticateJwt,
  secret
}