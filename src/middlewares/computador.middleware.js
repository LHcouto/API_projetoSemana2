const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const computador = req.body;

  if (
    !computador ||
    !computador.nome ||
    !computador.descricao ||
    !computador.foto ||
    !computador.preco
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
