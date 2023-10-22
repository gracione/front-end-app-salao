import Alterar from "../../components/alterar";
import { Center, Conteudo, Header } from "../../styles/global";
import api from '../../services/api';
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { useParams } from "react-router-dom";
import { AdicionarProfissao } from "./styles";
import { FaTrashAlt } from "react-icons/fa";

export default function AlterarFuncionario() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const [listagem, setListagem]: any = useState([]);
  const [profissao, setProfissao]: any = useState([]);
  const [expediente, setExpediente]: any = useState([]);
  const [profissoes, setProfissoes]: any = useState([]);
  const [inicioDeExpediente, setInicioDeExpediente]: any = useState('');
  const [inicioHorarioAlmoco, setInicioHorarioAlmoco]: any = useState('');
  const [fimHorarioAlmoco, setFimHorarioAlmoco]: any = useState('');
  const [fimExpediente, setFimExpediente]: any = useState('');
  const [profissaoFuncionario, setProfissaoFuncionario]: any = useState('');

  const { idFuncionario } = useParams();

  useEffect(() => {
    api
      .post("/servicos-profissao/listar-id", {
        id: idFuncionario
      })
      .then((response) =>
        [setProfissao(response.data.profissao),
        setListagem(response.data.funcionario),
        setExpediente(response.data.expediente),
        setProfissoes(response.data.profissoes)
        ]
      );
  }, [profissaoFuncionario]);

  const [profissoesAlteradas, setProfissoesAlteradas] = useState(profissao);
  const profissoesAlteradasAux: any = profissoesAlteradas;

  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;

  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(0);


  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  function alterarProfissao(valor: any, indice: any) {
    profissoesAlteradasAux[indice] = valor;
    setProfissoesAlteradas(profissoesAlteradasAux);
  }

  async function removerProfissao(idProfissao: any) {
    setProfissaoFuncionario(await api.post(`/funcionarios/excluir-id`, { id: idProfissao }));
  }
  if (!listagem) {
    return (
      <Header>
        <Conteudo>
          <h2>
            dados não carregados
          </h2>
        </Conteudo>
      </Header>
    )
  }
  return (
    <Header>
      <Conteudo>
        <h3 >Alterar Funcionário</h3>
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
          <div >
            <select
              style={{ width: '90%' }}
              required
              onChange={e => alterarProfissao(e.target.value, element.id_funcionario)}
              defaultValue={element.id}
            >
              {profissoes.map((prof: any) => (
                <option value={prof.id}>{prof.profissão}</option>
              ))}
            </select>
            <FaTrashAlt onClick={() => removerProfissao(element.id_funcionario)} style={{ width: '10%' }} />
          </div>
        ))}

        <div>
          {[...Array(quantidadeProfissoes)].map((x, i) =>
            <select
              onChange={e => adicionarProfissao(e.target.value, i)}
              required
            >
              <option>Escolha a Profissão</option>
              {
                profissoes.map((element: { id: string | number | readonly string[] | undefined; profissão: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                  <option value={element.id}>{element.profissão}</option>
                ))
              }
            </select>
          )}
        </div>
        <AdicionarProfissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
          Adicionar mais uma profissão
        </AdicionarProfissao>
        <table>
          <tr>
            <th colSpan={4}>
              <Center>
                Expediente
              </Center>
            </th>
          </tr>
          <tr>
            <td>Inicio de expediente</td>
            <td>Inicio de Horario de Almoço</td>
            <td>Fim de Horario de Almoço</td>
            <td>Fim de expediente</td>
          </tr>
          <tr>
            <td>
              <input
                defaultValue={expediente['inicio_de_expediente']}
                onChange={e => setInicioDeExpediente(e.target.value)}
                type="time"
              />
            </td>
            <td>
              <input
                defaultValue={expediente['inicio_horario_de_almoco']}
                onChange={e => setInicioHorarioAlmoco(e.target.value)}
                type="time"
              />
            </td>
            <td>
              <input
                defaultValue={expediente['fim_horario_de_almoco']}
                onChange={e => setFimHorarioAlmoco(e.target.value)}
                type="time"
              />
            </td>
            <td>
              <input
                defaultValue={expediente['fim_de_expediente']}
                onChange={e => setFimExpediente(e.target.value)}
                type="time"
              />
            </td>
          </tr>
        </table>
        <Alterar
          modulo="funcionarios"
          dados={{
            id: idFuncionario, nome, numero, profissoesCadastradas, profissoesAlteradas,
            expediente: { inicio1: inicioDeExpediente, fim1: inicioHorarioAlmoco, inicio2: fimHorarioAlmoco, fim2: fimExpediente }
          }}
        />

      </Conteudo>
    </Header>
  );
}
