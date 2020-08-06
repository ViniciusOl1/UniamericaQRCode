import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

function Header() {
  const teacherId = localStorage.getItem('teacherId');
  const history = useHistory();
  useEffect(() => {
    api.get('/professores', {
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
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/alunos">Alunos</Link></li>
          <li><Link to="/professores">Professores</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
          <li><Link to="/" onClick={handleLogout}>Sair</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
