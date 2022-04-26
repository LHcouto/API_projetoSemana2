const route = require('express').Router();
const controllerComputadores = require('../controllers/computador.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/computador.middleware');

route.get(
  '/all-computadores',
  controllerComputadores.findAllComputadoresController,
);
route.get(
  '/one-computador/:id',
  validId,
  controllerComputadores.findByIdComputadorController,
);
route.post(
  '/create-computador',
  validObjectBody,
  controllerComputadores.createComputadorController,
);
route.put(
  '/update-computador/:id',
  validId,
  validObjectBody,
  controllerComputadores.updateComputadorController,
);
route.delete(
  '/delete-computador/:id',
  validId,
  controllerComputadores.deleteComputadorController,
);

module.exports = route;
