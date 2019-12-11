const express = require('express');
const router = express.Router();

// Controllers
const index = require('../controllers/index');
const vuelosController = require('../controllers/VuelosController');
const contact = require('../controllers/contact');

module.exports = app => {

  router.get('/', index.index);
  router.get('/', vuelosController.index);
  router.post('/vuelos', vuelosController.index);
  router.get('/contact', contact.index);
  /*
  router.get('/', home.index);
  router.get('/images/:image_id', image.index);
  router.post('/images', image.create);
  router.post('/images/:image_id/like', image.like);
  router.post('/images/:image_id/comment', image.comment);
  router.delete('/images/:image_id', image.remove);
  */
  app.use(router);

};
