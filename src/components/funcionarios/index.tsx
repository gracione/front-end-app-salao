import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios(props: any) {
  const funcionario = BuscarDadosApi('funcionarios', 'listar');
  return (
    <Container>
      {funcionario.map((element) => (
        <CardFuncionario href={"informacoes/" + element.id + "/" + element.id_profissao + "/" + props.nomeCliente}>
          <h5>
            {element.nome}
          </h5>
          <h6>
            {element.profissão}
          </h6>
          <h2>
            {element.id}
          </h2>
        </CardFuncionario>
      ))}

      <CardAdicionarFuncionario href="funcionarios/adicionar" >
        <h5>Cadastrar</h5>
        <h6>Funcionário</h6>
        <h2>+</h2>
      </CardAdicionarFuncionario>
    </Container>
  );
}