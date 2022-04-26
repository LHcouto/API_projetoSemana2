const computadoresService = require('../services/computador.service');
const mongoose = require('mongoose');

const findAllComputadoresController = async (req, res) => {
  const allComputadores =
    await computadoresService.findAllComputadoresService();

  if (allComputadores.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum computador cadastrado!' });
  }
  res.send(allComputadores);
};

const findByIdComputadorController = async (req, res) => {
  const idParam = req.params.id;

  const chosenComputador =
    await computadoresService.findByIdComputadoresService(idParam);

  if (!chosenComputador) {
    return res.status(404).send({ message: 'Computador não encontrado!' });
  }

  res.send(chosenComputador);
};

const createComputadorController = async (req, res) => {
  const computador = req.body;

  const newComputador = await computadoresService.createComputadorService(
    computador,
  );
  res.status(201).send(newComputador);
};

const updateComputadorController = async (req, res) => {
  const idParam = req.params.id;
  const editComputador = req.body;
  const updatedComputador = await computadoresService.updateComputadorService(
    idParam,
    editComputador,
  );
  res.send(updatedComputador);
};

const deleteComputadorController = async (req, res) => {
  const idParam = req.params.id;

  await computadoresService.deleteComputadorService(idParam);

  res.send({ message: 'Computador deletado com sucesso!' });
};

module.exports = {
  findAllComputadoresController,
  findByIdComputadorController,
  createComputadorController,
  updateComputadorController,
  deleteComputadorController,
};
