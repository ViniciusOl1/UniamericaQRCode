import React, { useState, useEffect } from 'react';
import './index.css';
import { saveAs } from 'file-saver';
import Header from '../../components/Header';
import api from '../../services/api';

function Dashboard() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function loadStudents() {
            const response = await api('/frequencia');
            setStudents(response.data);
        }

        loadStudents();
    }, []);
  return (
    <>
    <Header />
    <meta http-equiv="refresh" content="5"></meta>
    <div id="container">
        <aside>
            <h2>Marque sua presença</h2>
                <img src="http://localhost:3333/aula/qrcode"
                alt="Marque sua Presença" />
        </aside>
        <main>
            <section class="presentes" onload="javascript:autoRefresh(6000);">
                <h2>Alunos Presentes</h2>
                {students.map(student => (
                <section key={student.id} class="presente-item">
                    <section class="avatar">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                        alt="{student.fullname}" class="avatar" />
                    </section>
                    <span>{student.fullname}</span>
                </section>
                ))}
            </section>
        </main>
    </div>
    </>
  );
}

export default Dashboard;
