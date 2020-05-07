import React, { useState, useEffect } from 'react';
import './index.css';

import Header from '../../components/Header';

function Dashboard() {
  return (
    <>
    <Header />
    <div id="container">
        <aside>
            <h2>Marque sua presença</h2>
                <img src="http://localhost:3333/aula/qrcode"
                alt="Marque sua Presença" />       
        </aside>
        <main>
            <section class="presentes">
                <h2>Alunos Presentes</h2>
                <section class="presente-item">
                    <section class="avatar">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                        alt="Vinicius Oliveira" class="avatar" />
                    </section>
                    <span>Vinicius Oliveira</span>
                </section>
            </section>
        </main>
    </div>
    </>
  );
}

export default Dashboard;
