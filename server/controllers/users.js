// Imports
const userModel = require('../models/users');

const getUsers = (req, res) => {
  res.send('HomePage SERVER');
};

module.exports = { getUsers };
