const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/computadores-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB,erro: ${error}`),
    );
};

module.exports = connectToDatabase;
