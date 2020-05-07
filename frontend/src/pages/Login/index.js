import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const res = await api.post('/login/professores', { email, password });
      localStorage.setItem('teacherId', res.data.id);
      localStorage.setItem('teacherName', res.data.fullname);
      history.push('/dashboard');
    }catch(err){
      alert("Falha no login, tente novamente");
    }
  }



  return (
    <section id="container">
        <section className="logo">
            <img src={logoImg} alt="Uniamérica - QRCode" />
        </section>
        <section className="login">
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Digite sua senha" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Acessar</button> 
            </form>
        </section>
    </section>
  );
}

export default Login;
