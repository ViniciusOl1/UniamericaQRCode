import React,{ useState, useEffect } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

function Relatorios() {
  const [frequency, setFrequency] = useState([]);

  useEffect(() => {
    async function loadFrequency() {
      const response = await api('/relatorios');
      setFrequency(response.data);
    }

    loadFrequency();
  }, []);
  return (
    <>
      <Header />
      <main>
        <section class="title">
          <h2>Relatórios</h2>
        </section>

        <section class="alunos">
          {frequency.map(student => (
            <section key={student.id} class="presente-item">
              <section class="avatar">
                <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                  alt="{student.fullname}" class="avatar" />
              </section>
              <span>{student.fullname}</span>
              <p>{student.data}</p>
            </section>
          ))}

        </section>
      </main>
    </>
  );
}

export default Relatorios;
