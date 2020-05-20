import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import Header from '../../../components/Header';
import api from '../../../services/api';

function CadastroProfessores() {  
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    async function handleAddTeacher(e){
        e.preventDefault();
        const data = {
            fullname,
            email, 
            password
        };
        try{
            await api.post('/professores', data);
            history.push('/professores');
        }catch(err){
            alert('Professor com e-mail já cadastrado, tente novamente!');
        }
            
    }

    return (
        <>
            <Header />
            <section id="container">
                <section className="cadastro">
                    <form onSubmit={handleAddTeacher}>
                        <input type="text" placeholder="Nome Completo: " value={fullname} onChange={e => setFullname(e.target.value)} />
                        <input type="text" placeholder="E-mail: " value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Senha: " value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="button-green">Cadastrar</button>
                        <button type="reset" className="button-red">Limpar</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default CadastroProfessores;
