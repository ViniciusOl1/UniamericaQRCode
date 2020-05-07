import React from 'react';
import './index.css';

import Header from '../../components/Header';

function Dashboard() {
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
