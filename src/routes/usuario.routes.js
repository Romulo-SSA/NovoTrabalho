const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/usuario.controller');

//router.post('/', controller.criar);
// router.get('/:email', controller.buscarPorEmail);
router.post('/login', controller.login); 

module.exports = router;
require('./src/routes/usuario.routes');
