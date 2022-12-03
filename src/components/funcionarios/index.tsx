import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios(props: any) {
  const funcionario = BuscarDadosApi('funcionarios', 'listar', {
    idUsuario: localStorage.getItem('id_usuario'),
    tipoUsuario: localStorage.getItem('tipo_usuario')
  });

  return (
    <Container>
      {funcionario.map((element) => (
        <CardFuncionario href={"informacoes/funcionario=" + element.id + "/" + element.id_profissao + "/" + props.nomeCliente}>
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

      <CardAdicionarFuncionario href="funcionarios/adicionar" >
        <h6>Cadastrar</h6>
        <h6>Funcionário</h6>
        <h2>+</h2>
      </CardAdicionarFuncionario>
    </Container>
  );
}