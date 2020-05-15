import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import Header from '../../../components/Header';
import api from '../../../services/api';

function EditarAlunos(props) {
    const [fullname, setFullname ] = useState('');
    const [ra, setRa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const studentEdit = props.match.params.id;
    const history = useHistory();
    useEffect(() => {
        async function loadStudents() {
            const response = await api.get(`/alunos/${studentEdit}`);
            setFullname(response.data.fullname);
            setRa(response.data.ra);
            setEmail(response.data.email);
            setPassword(response.data.password);
        }
        loadStudents();
    }, [])
    async function handleEditStudent(e){
        e.preventDefault();
        const data = {
            fullname,
            email,
            ra,
            password
        };
        try{
            await api.put(`alunos/${studentEdit}`, data);
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
                    <form onSubmit={handleEditStudent}>
                        <input type="text" value={fullname} onChange={e=>setFullname(e.target.value)} />
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                        <input type="text" value={ra} onChange={e=>setRa(e.target.value)} />
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                        <button type="submit" className="button-green">Editar</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default EditarAlunos;
