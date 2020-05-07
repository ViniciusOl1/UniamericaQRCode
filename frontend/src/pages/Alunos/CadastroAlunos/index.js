import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import Header from '../../../components/Header';
import api from '../../../services/api';

function CadastroAlunos() {
    const [fullname, setFullname ] = useState('');
    const [ra, setRa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const history = useHistory();

    async function handleAddStudent(e){
        e.preventDefault();
        const data = {
            fullname,
            email,
            ra,
            password
        };
        try{
            await api.post('alunos', data);
            history.push('/alunos');
        }catch(err){
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return (
        <>
            <Header />
            <section id="container">
                <section className="cadastro">
                    <form onSubmit={handleAddStudent}>
                        <input type="text" placeholder="Nome Completo: " value={fullname} onChange={e=>setFullname(e.target.value)} />
                        <input type="email" placeholder="Email: " value={email} onChange={e=>setEmail(e.target.value)}/>
                        <input type="text" placeholder="RA: " value={ra} onChange={e=>setRa(e.target.value)} />
                        <input type="password" placeholder="Senha: " value={password} onChange={e=>setPassword(e.target.value)} />
                        <button type="submit" className="button-green">Acessar</button>
                        <button type="reset" className="button-red">Limpar</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default CadastroAlunos;
