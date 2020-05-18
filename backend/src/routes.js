const express = require('express');
const AlunosController = require('./controllers/AlunosController');
const ProfessoresController = require('./controllers/ProfessoresController');
const ClassController = require('./controllers/ClassController');
const SessionAlunoController = require('./controllers/SessionAlunoController');
const SessionProfessorController = require('./controllers/SessionProfessorController');
const FrequencyController = require('./controllers/FrequencyController');
const RelatorioController = require('./controllers/RelatorioController');
const routes = require("express").Router();
const multer = require("multer");
const upImage = multer({ dest:'./tmp/uploads'})

//Login
routes.post('/login/alunos', SessionAlunoController.create);
routes.post('/login/professores', SessionProfessorController.create);
//Alunos
routes.get('/alunos', AlunosController.index);
routes.get('/alunos/:id', AlunosController.index);
routes.post('/alunos', AlunosController.create);
routes.delete('/alunos/:id', AlunosController.delete);
routes.put('/alunos/:id', AlunosController.update);
routes.post('/alunospictures/:id', AlunosController.uploadimage);
//Professores
routes.get('/professores', ProfessoresController.index);
routes.get('/professores/:id', ProfessoresController.index);
routes.post('/professores', ProfessoresController.create);
routes.delete('/professores/:id', ProfessoresController.delete);
routes.put('/professores/:id', ProfessoresController.update);
// QRCode
routes.get('/aula', ClassController.index);
routes.post('/aula/qrcode', ClassController.create);
routes.get('/aula/qrcode', ClassController.create);

routes.get('/frequencia', FrequencyController.index);
routes.post('/frequencia', FrequencyController.create);

routes.get('/relatorios/diario', RelatorioController.diario);
routes.get('/relatorios/mensal', RelatorioController.mensal);

module.exports = routes;