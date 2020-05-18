import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import Header from '../../../components/Header';
import api from '../../../services/api';

function EditarProfessores(props) {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const teacherEdit = props.match.params.id;
    const history = useHistory();
    useEffect(() => {
        async function loadTeachers() {
            const response = await api.get(`/professores/${teacherEdit}`);
            setFullname(response.data.fullname);
            setEmail(response.data.email);
            setPassword(response.data.password);
        }
        loadTeachers();
    }, [])


    async function handleEditTeacher(e) {
        e.preventDefault();
        const data = {
            fullname,
            email,
            password
        };
        try {
            await api.put(`professores/${teacherEdit}`, data);
            history.push('/professores');
        } catch (err) {
            alert('Erro ao atualizar, tente novamente');
        }

    }
    return (
        <>
            <Header />
            <section id="container">
                <section className="cadastro">
                    <form onSubmit={handleEditTeacher}>
                        <input type="text" placeholder="Nome Completo: " value={fullname} onChange={e => setFullname(e.target.value)} />
                        <input type="text" placeholder="E-mail: " value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Senha: " value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="button-green">Editar</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default EditarProfessores;
