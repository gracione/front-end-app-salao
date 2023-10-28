import { Conteudo, Header } from "../../styles/global";

import { useState, useEffect } from "react";
import BuscarDadosApi from "../../components/util";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Filtros from "./filtro";

export default function Informacoes() {
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState('0');
  const [idFiltro, setIdFiltro] = useState('0');
  const { idUsuarioFuncionario, idProfissao, nomeCliente } = useParams();
  let tratamentoPorProfissao = BuscarDadosApi('tratamentos', 'listar-id-profissao', { id: idProfissao });
  const idTipoUsuario = localStorage.getItem("tipo_usuario");

  if(idTipoUsuario !== '3' && nomeCliente === undefined){
    window.location.href = "/home";
  }

  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: idFiltro,
        tratamento: idTratamento
      })
      .then((response) => setTempoGasto(response.data));
  }, [idTratamento, idFiltro]);

  let urlNomeCliente = '';

  if (nomeCliente) {
    urlNomeCliente = nomeCliente;
  }
  return (
    <Header>
      <Conteudo>
        <form action={"/escolher-horario/funcionario=" + idUsuarioFuncionario + "/" + idProfissao + "/" + idTratamento + "/" + idFiltro + "/" + urlNomeCliente}>
          <div>
            <h3>Etapa Tratamento</h3>
            <hr />
            <div className="border d-flex" >
              <div className="border w-75 d-flex justify-content-center">
                Tempo gasto aproximado
              </div>
              <div className="border w-25 d-flex justify-content-center">
                {tempoGasto}
              </div>
            </div>
            <label htmlFor="">Tratamento</label>
            <select
            className="rounded"
              onChange={e => setIdTratamento(e.target.value)}
              required
            >
              <option value="">------ Selecione ------</option>
              {
                tratamentoPorProfissao.map((element:any) => (
                  <option
                    value={element.id}
                  >
                    {element.nome}
                  </option>
                ))
              }

            </select>
            <Filtros
              data={idTratamento}
              setIdFiltro={setIdFiltro}
            />
          </div>
          <button>Prosseguir</button>
        </form>
      </Conteudo>
    </Header>
  );
}
