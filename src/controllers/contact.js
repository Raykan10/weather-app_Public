const path = require('path');

const ctrl = {};

ctrl.index = async (req, res) => {
  res.render('contact');
};

module.exports = ctrl;