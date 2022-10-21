import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/createUserForm', homeController.createUserForm);
  router.post('/postCreateUser', homeController.postCRUD);
  router.get('/getListUser', homeController.getListUser);
  router.get('/editUser', homeController.editUser);
  router.post('/putUser', homeController.editUserComplete);
  return app.use('/', router);
};

module.exports = initWebRoutes;
