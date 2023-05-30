import { Conteudo, Header } from "../../styles/global";
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Relatorio() {
  const [dataInicio, setDataInicio] = useState(new Date().toISOString().split('T')[0]);
  const [dataFim, setDataFim] = useState(new Date().toISOString().split('T')[0]);
  const [horariosMarcados, setHorariosMarcados] = useState([]);

  useEffect(() => {
    try {
      api.post('horarios-marcados/listar', {
        idUsuario: localStorage.getItem("id_usuario"),
        tipoUsuario: localStorage.getItem("tipo_usuario"),
        dataInicio,
        dataFim
      })
        .then((response) => setHorariosMarcados(response.data));
    } catch (err) {
      console.error(err);
      window.location.href = "/home";
    }
  }, [dataInicio, dataFim]);

  const handleOptionChange = (event: any) => {
    const selectedOption = event.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedOption === 'hoje') {
      setDataInicio(today);
      setDataFim(today);
    } else if (selectedOption === 'semana') {
      const firstDayOfWeek = new Date();
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()); // Define o primeiro dia da semana (domingo)
      const lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6); // Define o último dia da semana (sábado)

      setDataInicio(firstDayOfWeek.toISOString().split('T')[0]);
      setDataFim(lastDayOfWeek.toISOString().split('T')[0]);
    } else if (selectedOption === 'mes') {
      const firstDayOfMonth = new Date();
      firstDayOfMonth.setDate(1); // Define o primeiro dia do mês
      const lastDayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0); // Define o último dia do mês

      setDataInicio(firstDayOfMonth.toISOString().split('T')[0]);
      setDataFim(lastDayOfMonth.toISOString().split('T')[0]);
    }
  }
  return (
    <Header>
      <Conteudo>
        <h3>Relatório de Atendimento</h3>
        <div className="w-75 d-flex justify-content-between align-items-center">
          <label className="w-50">Horários Marcados</label>
          <select className="w-50 mt-1" onChange={handleOptionChange}>
            <option value="hoje">Hoje</option>
            <option value="semana">Essa Semana</option>
            <option value="mes">Esse Mês</option>
          </select>
        </div>

        <table className="w-100">
          <thead>
            <tr className="bg-dark">
              <th>Cliente</th>
              <th>Funcionário</th>
              <th>Serviço</th>
              <th>Telefone</th>
              <th>Horário</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {horariosMarcados.map((horario: any) => (
              <tr key={horario.id}>
                <td>{horario.nome_cliente ?? horario.cliente}</td>
                <td>{horario.funcionario}</td>
                <td>{horario.tratamento}</td>
                <td>{horario.telefone}</td>
                <td>{horario.horario}</td>
                <td>{horario.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Conteudo>
    </Header>
  );
}
