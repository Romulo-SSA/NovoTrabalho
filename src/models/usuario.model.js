const db = require('./db');
const bcrypt = require('bcrypt');

exports.criar = (usuario, callback) => {
  bcrypt.hash(usuario.password, 10, (err, hash) => {
    if (err) return callback(err);

    const sql = 'INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario) VALUES (?, ?, ?, ?)';
    db.query(sql, [usuario.nome, usuario.email, hash, usuario.tipo_usuario], callback);
  });
};

exports.buscarPorEmail = (email, callback) => {
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
};
