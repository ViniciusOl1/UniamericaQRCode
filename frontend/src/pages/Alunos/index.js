import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './index.css';

import Header from '../../components/Header';
import api from '../../services/api';

function Alunos() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function loadStudents() {
            const response = await api('/alunos');
            setStudents(response.data);
        }

        loadStudents();
    }, [])

    return (
        <>
            <Header />
            <main>
                <section class="title">
                    <h2>Alunos Cadastrados</h2>
                    <Link to="alunos/cadastrar" className="button">+ Cadastrar Alunos</Link>
                </section>

                <section class="alunos">
                    {students.map(student => (
                        <section key={student.id} class="aluno-item">
                            <section class="avatar">
                                <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                                    alt={student.fullname} class="avatar" />
                            </section>
                            <span>{student.fullname}</span>
                        </section>
                    ))}


                </section>
            </main>
        </>
    );
}

export default Alunos;
