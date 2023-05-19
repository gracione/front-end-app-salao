import BuscarDadosApi from "../../util/util";
import { CardFuncionario, Container } from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Filtros from "./filtro";
import { FaClock } from "react-icons/fa";

export default function Funcionarios(props: any) {
  const idTipoUsuario: any = localStorage.getItem("tipo_usuario");
  const funcionario = BuscarDadosApi("funcionarios", "listar-funcionarios", {
    idUsuario: localStorage.getItem("id_usuario"),
    tipoUsuario: localStorage.getItem("tipo_usuario"),
  });
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState("0");
  const [idFiltro, setIdFiltro] = useState("0");
  const [formActive, setFormActive] = useState(false);
  const [idUsuarioFuncionario, setIdUsuarioFuncionario] = useState("");
  const [idProfissao, setIdProfissao] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [tratamentoPorProfissao, setTratamentoPorProfissao] = useState([]);

  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: idFiltro,
        tratamento: idTratamento,
      })
      .then((response) => setTempoGasto(response.data));
  }, [idTratamento, idFiltro]);

  let urlNomeCliente = nomeCliente || "";

  useEffect(() => {
    api
      .post("/tratamentos/listar-id-profissao", {
        id: idProfissao,
      })
      .then((response) => setTratamentoPorProfissao(response.data));
  }, [idProfissao, formActive]);

  function etapaTratamento(dados: any) {
    setIdUsuarioFuncionario(dados.funcionario);
    setIdProfissao(dados.id_profissao);
    setNomeCliente(dados.nomeCliente);

    setFormActive(!formActive);
  }

  return (
    <Container>
      {funcionario.map((element: any) => (
        <CardFuncionario
          key={element.id}
          className={`${idTipoUsuario !== "3" && props.nomeCliente.length <= 0 ? "opacity-50 text-secondary" : ""}`}
          onClick={() => etapaTratamento({ funcionario: element.id, id_profissao: element.id_profissao, nomeCliente: props.nomeCliente })}
        >
          <h6>{element.nome}</h6>
          <h6>{element.profissão}</h6>
          <h2>{element.id}</h2>
        </CardFuncionario>
      ))}

      {formActive && (
        <form
          action={`/escolher-horario/funcionario=${idUsuarioFuncionario}/${idProfissao}/${idTratamento}/${idFiltro}/${urlNomeCliente}`}
        >
          <div>
            <div className="d-flex">
              <div className="border w-75 d-flex justify-content-center align-items-center">
                <FaClock className="mr-4" />
                Tempo gasto aproximado
              </div>
              <div className="border w-25 d-flex justify-content-center">
                {tempoGasto}
              </div>
            </div>
            <label htmlFor="">Tratamento</label>
            <select
              className="rounded"
              onChange={(e) => setIdTratamento(e.target.value)}
              required
            >
              <option value="">------ Selecione ------</option>
              {tratamentoPorProfissao.map((element: any) => (
                <option key={element.id} value={element.id}>
                  {element.nome}
                </option>
              ))}
            </select>
            <Filtros data={idTratamento} setIdFiltro={setIdFiltro} />
          </div>
          <button>Prosseguir</button>
        </form>
      )}
    </Container>
  );
}
