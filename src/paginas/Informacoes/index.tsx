import { Conteudo, Header } from "../../styles/global";

import { useState, useEffect } from "react";
import BuscarDadosApi from "../../util/util";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Filtros from "./filtro";

export default function Informacoes() {
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState('0');
  const [idFiltro, setIdFiltro] = useState('0');
  const { idUsuarioFuncionario, idProfissao, nomeCliente } = useParams();
  let tratamentoPorProfissao = BuscarDadosApi('tratamentos', 'listar-id-profissao', { id: idProfissao });

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
            <h2>Etapa Tratamento</h2>
            <hr />
            <div className="border d-flex" >
              <div className="border w-50 d-flex justify-content-center">
                Tempo gasto aproximado
              </div>
              <div className="border w-50 d-flex justify-content-center">
                {tempoGasto}
              </div>
            </div>
            <br / >
            <label htmlFor="">Tratamento</label>
            <select
            className="rounded bg-white"
              onChange={e => setIdTratamento(e.target.value)}
              required
            >
              <option value="">------ Selecione ------</option>
              {
                tratamentoPorProfissao.map((element) => (
                  <option
                    value={element.id}
                  >
                    {element.nome}
                  </option>
                ))
              }

            </select>
          </div>
          <Filtros
            data={idTratamento}
            setIdFiltro={setIdFiltro}
          />
          <button>Prosseguir</button>
        </form>
      </Conteudo>
    </Header>
  );
}
