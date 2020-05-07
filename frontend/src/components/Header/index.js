import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

function Header() {
  const teacherId = localStorage.getItem('teacherId');
  const history = useHistory();
  useEffect(() => {
    api.get('professores', {
      headers: { Authorization: teacherId }
    });
    if (!teacherId) {
      history.push('/');
    }
  }, [history, teacherId]);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }


  return (
    <header>
      <img src={logoImg} alt="Uniamérica - QRCode" />

      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/alunos">Alunos</a></li>
          <li><a href="/professores">Professores</a></li>
          <li><a href="/relatorios">Relatórios</a></li>
          <li><a href="/" onClick={handleLogout}>Sair</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
