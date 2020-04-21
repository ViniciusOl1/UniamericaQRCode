import React, { Component } from 'react';

import './index.css';

import logoImg from '../../assets/logo.png';

class Header extends Component {
  render (){
    return(
      <header>
        <img src={logoImg} alt="Uniamérica - QRCode"/>

        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/alunos">Alunos</a></li>
            <li><a href="/professores">Professores</a></li>
            <li><a href="/relatorios">Relatórios</a></li>
            <li><a href="/">Sair</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
