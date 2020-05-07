const express = require('express');
const AlunosController = require('./controllers/AlunosController');
const ProfessoresController = require('./controllers/ProfessoresController');
const ClassController = require('./controllers/ClassController');
const SessionAlunoController = require('./controllers/SessionAlunoController');
const SessionProfessorController = require('./controllers/SessionProfessorController');
const routes = express.Router();

//Login
routes.post('/login/alunos', SessionAlunoController.create);
routes.post('/login/professores', SessionProfessorController.create);
//Alunos
routes.get('/alunos', AlunosController.index);
routes.post('/alunos', AlunosController.create);
routes.delete('/alunos/:id', AlunosController.delete);
routes.put('/alunos/:id', AlunosController.update);
//Professores
routes.get('/professores', ProfessoresController.index);
routes.post('/professores', ProfessoresController.create);
routes.delete('/professores/:id', ProfessoresController.delete);
routes.put('/professores/:id', ProfessoresController.update);
// QRCode
routes.post('/aula', ClassController.index);
routes.get('/aula', ClassController.index);

module.exports = routes;