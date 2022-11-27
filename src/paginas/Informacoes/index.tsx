import { Conteudo } from "../../styles/global";

import { useState, useEffect } from "react";
import BuscarDadosApi from "../../util/util";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Filtros from "./filtro";

export default function Informacoes() {
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState('0');
  const [idFiltro, setIdFiltro] = useState('0');
  const { idUsuarioFuncionario, idProfissao } = useParams();
  let tratamentoPorProfissao = BuscarDadosApi('tratamentos', 'listar-id-profissao', { id: idProfissao });

  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: idFiltro,
        tratamento: idTratamento
      })
      .then((response) => setTempoGasto(response.data));
  }, [idTratamento, idFiltro]);
  console.log(idTratamento);
  return (
    <Conteudo>
      <form action={"/escolher-horario/funcionario=" + idUsuarioFuncionario + "/" + idProfissao + "/" + idTratamento + "/" + idFiltro + "/"}>
        <div>
          <div>Tempo gasto aproximado {tempoGasto}</div>
          <label htmlFor="">Tratamento</label>
          <select
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
  );
}
