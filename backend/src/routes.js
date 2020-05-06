const express = require('express');
const AlunosController = require('./controllers/AlunosController');
const ProfessoresController = require('./controllers/ProfessoresController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/sessions', SessionController.index);
routes.get('/alunos', AlunosController.index);
routes.get('/professores', ProfessoresController.index);
routes.post('/professores', ProfessoresController.create);
routes.delete('/professores/:id', ProfessoresController.delete);
routes.put('/professores/:id', ProfessoresController.update);

module.exports = routes;