const Computadores = require('../models/Computador');

const findAllComputadoresService = async () => {
  const allComputadores = await Computadores.find();
  return allComputadores;
};

const findByIdComputadoresService = async (idParam) => {
  const oneComputador = await Computadores.findById(idParam);
  return oneComputador;
};

const createComputadorService = async (newComputador) => {
  const createdComputador = await Computadores.create(newComputador);
  return createdComputador;
};

const updateComputadorService = async (idParam, editComputador) => {
  const updateComputador = await Computadores.findByIdAndUpdate(
    idParam,
    editComputador,
  );

  return updateComputador;
};

const deleteComputadorService = async (idParam) => {
  return await Computadores.findByIdAndDelete(idParam);
};

module.exports = {
  findAllComputadoresService,
  findByIdComputadoresService,
  createComputadorService,
  updateComputadorService,
  deleteComputadorService,
};
