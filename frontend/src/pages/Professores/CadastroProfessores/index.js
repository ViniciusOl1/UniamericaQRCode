import React from 'react';
import './index.css';
import Header from '../../../components/Header';

function CadastroProfessores() {

    return (
        <>
            <Header />
            <section id="container">
                <section className="cadastro">
                    <form>
                        <input type="text" placeholder="Nome Completo: " />
                        <input type="text" placeholder="E-mail: " />
                        <input type="text" placeholder="Senha: " />
                        <input type="text" placeholder="Confirmar Senha: " />
                        <button type="submit" className="button-green">Acessar</button>
                        <button type="reset" className="button-red">Limpar</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default CadastroProfessores;
