const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./src/routes/usuario.routes');
const chamadoRoutes = require('./src/routes/chamado.routes');
const respostaRoutes = require('./src/routes/resposta.routes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Use isso em vez de body-parser (é nativo desde o Express 4.16+)

// Rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/chamados', chamadoRoutes);
app.use('/api/respostas', respostaRoutes);

// Início do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
