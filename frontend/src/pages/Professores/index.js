import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

import Header from '../../components/Header';

function Professores() {
  return (
    <>
    <Header />
    <main>
                <section class="title">
                    <h2>Professores Cadastrados</h2>
                    <Link to="professores/cadastrar" className="button">+ Cadastrar Professores</Link>
                </section>

                <section class="professores">
                        <section key="professor.id" class="professor-item">
                        <section class="avatar">
                            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                                alt="professor.nomecompleto" class="avatar" />
                        </section>
                        <span>professor.nomecompleto</span>
                    </section>                        

                </section>
            </main>    
    </>
  );
}

export default Professores;
