const express = require('express');
const AlunosController = require('./controllers/AlunosController');
const ProfessoresController = require('./controllers/ProfessoresController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/sessions', SessionController.index);
routes.get('/alunos', AlunosController.index);
routes.get('/professores', ProfessoresController.index);

module.exports = routes;