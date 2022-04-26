const mongoose = require('mongoose');

const ComputadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

const Computador = mongoose.model('computadores', ComputadorSchema);

module.exports = Computador;
