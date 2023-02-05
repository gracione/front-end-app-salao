import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios(props: any) {
  const idTipoUsuario: any = localStorage.getItem("tipo_usuario");
  const funcionario = BuscarDadosApi('funcionarios', 'listar-funcionarios', {
    idUsuario: localStorage.getItem('id_usuario'),
    tipoUsuario: localStorage.getItem('tipo_usuario')
  });

  if (idTipoUsuario !== '3' && props.nomeCliente.length <= 0) {
  }

  return (
    <Container>
      {funcionario.map((element) => (
        idTipoUsuario !== '3' && props.nomeCliente.length <= 0 ?
          <CardFuncionario className="opacity-50 text-secondary" >
            <h6>
              {element.nome}
            </h6>
            <h6>
              {element.profissão}
            </h6>
            <h2>
              {element.id}
            </h2>
          </CardFuncionario>
          :
          <CardFuncionario
            href={"informacoes/funcionario=" + element.id + "/" + element.id_profissao + "/" + props.nomeCliente} className='funcionarios'

          >
            <h6>
              {element.nome}
            </h6>
            <h6>
              {element.profissão}
            </h6>
            <h2>
              {element.id}
            </h2>
          </CardFuncionario>

      ))}

      {idTipoUsuario === '1' &&

        <CardAdicionarFuncionario href="funcionarios/adicionar" >
          <h6>Cadastrar</h6>
          <h6>Funcionário</h6>
          <h2>+</h2>
        </CardAdicionarFuncionario>
      }
    </Container>
  );
}