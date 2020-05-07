import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import api from '../../services/api';
import Header from '../../components/Header';

function Dashboard() {
    const teacherId = localStorage.getItem('teacherId');
    const teacherName = localStorage.getItem('teacherName');
    const history = useHistory();

  return (
    <>
    <Header />
    <div id="container">
        <aside>
            <h2>Marque sua presença</h2>
            <img src="https://boofcv.org/images/thumb/3/35/Example_rendered_qrcode.png/400px-Example_rendered_qrcode.png"
                alt="Marque sua Presença" />
            <button>Gerar QRCode</button>
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
