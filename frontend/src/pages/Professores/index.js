import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import './index.css';

import Header from '../../components/Header';
import api from '../../services/api';

function Professores() {
  const [teachers, setTeachers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadTeachers(){
      const response = await api.get('/professores');
      setTeachers(response.data);
    }
    loadTeachers();
  }, [])
  

  return (
    <>
    <Header />
    <main>
                <section class="title">
                    <h2>Professores Cadastrados</h2>
                    <Link to="professores/cadastrar" className="button">+ Cadastrar Professores</Link>
                </section>
                
                <section class="professores">                                              
                {teachers.map(teacher => ( 
                  <section key={teacher.id} class="professor-item" onClick={() => { history.push(`professores/editar/${teacher.id}`)}}>
                        <section class="avatar">
                            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                                alt={teacher.fullname} class="avatar" />
                        </section>
                        <span>{teacher.fullname}</span>
                    </section> 
                ))}
                </section>
            </main>    
    </>
  );
}

export default Professores;
