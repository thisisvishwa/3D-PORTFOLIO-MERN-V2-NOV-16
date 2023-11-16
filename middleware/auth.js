```javascript
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Check if user exists
    User.findById(decoded.user.id)
      .then(user => {
        if (!user) {
          return res.status(401).json({ msg: 'Token is not valid' });
        }
        req.user = decoded.user;
        next();
      })
      .catch(err => {
        res.status(500).json({ msg: 'Server error' });
      });
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
```