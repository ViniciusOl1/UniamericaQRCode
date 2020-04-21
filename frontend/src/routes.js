import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Perfil from './pages/Perfil';
import Relatorios from './pages/Relatorios';
import Professores from './pages/Professores';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/alunos' component={Alunos} />
                <Route path='/perfil' component={Perfil} />                
                <Route path='/relatorios' component={Relatorios} />
                <Route path='/professores' component={Professores} />
            </Switch>
        </BrowserRouter>
    )
}