import Alterar from "../../util/alterar";
import { Conteudo, Header } from "../../styles/global";
import api from '../../services/api';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BuscarDadosApi from "../../util/util";
import { AdicionarPrifissao } from "./styles";

export default function AlterarFuncionario() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const [listagem, setListagem]: any = useState([]);
  const [profissao, setProfissao]: any = useState([]);
  const [expediente, setExpediente]: any = useState([]);
  const [inicioDeExpediente, setInicioDeExpediente]: any = useState('');
  const [inicioHorarioAlmoco, setInicioHorarioAlmoco]: any = useState('');
  const [fimHorarioAlmoco, setFimHorarioAlmoco]: any = useState('');
  const [fimExpediente, setFimExpediente]: any = useState('');

  const { idFuncionario } = useParams();

  const profissoes = BuscarDadosApi('profissao', 'listar');

  const [profissoesAlteradas, setProfissoesAlteradas] = useState(profissao);
  const profissoesAlteradasAux: any = profissoesAlteradas;

  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;


  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(0);


  useEffect(() => {
    api
      .post("/profissao/listar-id-funcionario", {
        id: idFuncionario
      })
      .then((response) => setProfissao(response.data));

    api
      .post("/funcionarios/listar-id", {
        id: idFuncionario
      })
      .then((response) => setListagem(response.data[0]));

    api
      .post("/expediente/listar-id", {
        id: idFuncionario
      })
      .then((response) => setExpediente(response.data));

  }, []);

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  function alterarProfissao(valor: any, indice: any) {
    profissoesAlteradasAux[indice] = valor;
    setProfissoesAlteradas(profissoesAlteradasAux);
  }
  return (
    <Header>
      <Conteudo>
        <h2 >Alterar Funcionario</h2><br />

        <label>Nome</label>
        <input
          defaultValue={listagem['nome']}
          onChange={e => setNome(e.target.value)}
          required
        />

        <label>Contato(telefone)</label>
        <input
          defaultValue={listagem['numero']}
          onChange={e => setNumero(e.target.value)}
          required
        />
        <option value={0}>Escolha a Profissão</option>

        {profissao.map((element: any) => (
          <select
            required
            onChange={e => alterarProfissao(e.target.value, element.id_funcionario)}
            defaultValue={element.id}
          >
            <option value={'-1'}>Deletar</option>
            {profissoes.map((element: any) => (
              <option value={element.id}>{element.profissão}</option>
            ))}
          </select>
        ))}

        <div>
          {[...Array(quantidadeProfissoes)].map((x, i) =>
            <select
              onChange={e => adicionarProfissao(e.target.value, i)}
              required
            >
              <option>Escolha a Profissão</option>
              {
                profissoes.map((element) => (
                  <option value={element.id}>{element.profissão + " " + i}</option>
                ))
              }
            </select>
          )}
        </div>
        <AdicionarPrifissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
          Adicionar mais uma profissão
        </AdicionarPrifissao>

        <fieldset className="display-flex p-1">
          <legend>Expediente</legend>
          <div>
            <small>Inicio de expediente</small><br />
            <input
              defaultValue={expediente['inicio_de_expediente']}
              onChange={e => setInicioDeExpediente(e.target.value)}
              type="time"
            />
          </div>
          <div>
            <small >Inicio de Horario de Almoço</small><br />
            <input
              defaultValue={expediente['inicio_horario_de_almoco']}
              onChange={e => setInicioHorarioAlmoco(e.target.value)}
              type="time"
            />
          </div>
          <div>
            <small >Fim de Horario de Almoço</small><br />
            <input
              defaultValue={expediente['fim_horario_de_almoco']}
              onChange={e => setFimHorarioAlmoco(e.target.value)}
              type="time"
            />
          </div>
          <div>
            <small >Fim de expediente</small><br />
            <input
              defaultValue={expediente['fim_de_expediente']}
              onChange={e => setFimExpediente(e.target.value)}
              type="time"
            />
          </div>
        </fieldset>

        <button onClick={() => Alterar("funcionarios", { id: idFuncionario, nome, numero, profissoesCadastradas, profissoesAlteradas, expediente: { inicio1: inicioDeExpediente, fim1: inicioHorarioAlmoco, inicio2: fimHorarioAlmoco, fim2: fimExpediente } })} >Alterar</button>
      </Conteudo>
    </Header>
  );
}
