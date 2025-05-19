const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model');

exports.login = (req, res) => {
  const { email, senha } = req.body;

  exports.criar = (req, res) => {
  res.send('Função criar ainda não implementada');
};

exports.buscarPorEmail = (req, res) => {
  res.send(`Buscando usuário com e-mail: ${req.params.email}`);
};


  Usuario.buscarPorEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (!results.length) return res.status(404).send({ message: 'Usuário não encontrado' });

    const usuario = results[0];

    bcrypt.compare(senha, usuario.senha_hash, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match) return res.status(401).send({ message: 'Senha incorreta' });

      res.send({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
        
      });
    });
  });
};
