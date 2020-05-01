import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import CadastroAlunos from './pages/Alunos/CadastroAlunos';
import Perfil from './pages/Perfil';
import Relatorios from './pages/Relatorios';
import Professores from './pages/Professores';
import CadastroProfessores from './pages/Professores/CadastroProfessores';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/alunos' exact component={Alunos} />
                <Route path='/alunos/cadastrar' component={CadastroAlunos} />
                <Route path='/perfil' component={Perfil} />                
                <Route path='/relatorios' component={Relatorios} />
                <Route path='/professores' exact component={Professores} />
                <Route path='/professores/cadastrar' component={CadastroProfessores} />
            </Switch>
        </BrowserRouter>
    )
}