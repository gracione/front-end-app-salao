import api from '../../services/api';
import { useParams } from "react-router-dom";
import BuscarDadosApi from "../../util/util";
import Alterar from "../../util/alterar";
import { useState, useEffect } from "react";
import { Conteudo, Header } from "../../styles/global";

export default function AlterarTratamento() {
  const { idTratamento } = useParams();
  const [tratamento, setTratamento]: any = useState([]);
  const [filtro, setFiltro]: any = useState([]);
  const profissoes: any = BuscarDadosApi('profissao', 'listar');

  const [nomeTratamento, setNomeTratamento]: any = useState([]);
  const [tempoGasto, setTempoGasto]: any = useState([]);
  const [idProfissao, setIdProfissao] = useState("");
  const [filtroTipo, setFiltroTipo] = useState([]);
  const [filtro_, setFiltro_] = useState([]);

  useEffect(() => {
    api
      .post("/tratamentos/listar-id", {
        id: idTratamento
      })
      .then((response) =>
      (
        setFiltro(response.data.filtro),
        setTratamento(response.data)
      )
      );
  }, []);

  const dadosTipoFiltro = (linha: any, event: any) => {
    let aux: any = filtroTipo;
    aux[linha] = {
      id: linha,
      nome: event.target.value
    }
    setFiltroTipo(aux);
  };

  const dadosFiltro = (linha: any, event: any, campo: any) => {
    let aux: any = filtro_;
    aux[linha] = {
      'id': linha,
      [campo]: event.target.value
    };
    setFiltro_(aux);
  };

  return (
    <Header>
      <Conteudo>
        <input
          placeholder="Tratamento"
          defaultValue={tratamento.nome}
          onChange={e => setNomeTratamento(e.target.value)}
          required
        />
        <input
          placeholder="Tempo Gasto"
          type="time"
          defaultValue={tratamento.tempo_gasto}
          onChange={e => setTempoGasto(e.target.value)}
          required
        />

        <select
          required
          onChange={e => setIdProfissao(e.target.value)}
          defaultValue={tratamento.id_profissao}
        >
          {profissoes.map((element: any) => (
            <option value={element.id}>
              {element.profissão}</option>
          ))}
        </select>

        <fieldset>
          <h4>Filtro</h4>
          {filtro.map((element: any) => (
            <div className="p-1" >
              <input
                onChange={e => dadosTipoFiltro(element[0].id_filtro_tipo, e)}
                defaultValue={element[0].nome_filtro_tipo}
                className="inputTable"
                placeholder="Nome do filtro"
              />
              {element.map((filtro: any) => (
                <div className="display-flex" key={filtro}>
                  <input
                    onChange={e => dadosFiltro(filtro.id, e, 'nome')}
                    className="inputTable" defaultValue={filtro.nome}
                    placeholder="Filtro"
                    type="text"

                  />
                  <input
                    onChange={e => dadosFiltro(filtro.id, e, 'porcentagem_tempo')}
                    className="inputTable" defaultValue={filtro.porcentagem_tempo} placeholder="Porcentagem" type="number"

                  />

                </div>
              ))}
            </div>
          ))}
        </fieldset>
        <Alterar
          modulo="tratamentos"
          dados={{ id: idTratamento, nomeTratamento, tempoGasto, profissao: idProfissao, filtroTipo, filtro: filtro_ }}
        />
      </Conteudo>
    </Header>
  );
}
