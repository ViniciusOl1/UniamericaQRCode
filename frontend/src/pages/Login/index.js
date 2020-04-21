import React from 'react';

import './index.css';

import logoImg from '../../assets/logo.png';


function Login() {

  return (
    <section id="container">
        <section className="logo">
            <img src={logoImg} alt="Uniamérica - QRCode" />
        </section>
        <section className="login">
            <form>
                <input type="text" placeholder="Digite seu RP" />
                <input type="password" placeholder="Digite sua senha" />
                <button type="submit">Acessar</button> 
            </form>
        </section>
    </section>
  );
}

export default Login;
