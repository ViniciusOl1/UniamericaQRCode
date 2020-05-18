import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import jsPDF from 'jspdf';
import './index.css';

function Relatorios() {
  const [diario, setDiario] = useState([]);
  const [mensal, setMensal] = useState([]);

  useEffect(() => {
    async function loadMensal() {
      const response = await api('/relatorios/mensal');
      setMensal(response.data);
    }

    async function loadDiario() {
      const response = await api('/relatorios/diario');
      setDiario(response.data);
    }

    loadDiario();
    loadMensal();
  }, []);

  function RelatorioDiario() {
    var doc = jsPDF();
    var linha = 20;

    {
      diario.map(student => (
        doc.text(20, linha, `${student.data} - ${student.fullname}`),
        linha = linha + 10
      ))
    }

    // Save the Data
    doc.save('Diario.pdf')
  }

  function RelatorioMensal() {
    var doc = jsPDF();
    var linha = 20;

    {
      mensal.map(student => (
        doc.text(20, linha, `${student.data} - ${student.fullname}`),
        linha = linha + 10
      ))
    }

    // Save the Data
    doc.save('Mensal.pdf')
  }


  return (
    <>
      <Header />
      <main>
        <section class="title">
          <h2>Relatórios</h2>
          
        </section>

        <section class="relatorios">
          <span>Nos botões abaixos escolha qual o relatório que deseja baixar:</span><br />< br/>< br/>
          
            <Link onClick={RelatorioDiario} className="button">Relatório Diário</Link>
            <Link onClick={RelatorioMensal} className="button">Relatório Total</Link>
         
        </section>
      </main>
    </>
  );
}

export default Relatorios;
