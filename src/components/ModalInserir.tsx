import Profissao from "../../src/paginas/Profissoes/adicionar";
import Funcionario from "../../src/paginas/Funcionarios/inserir";
import Feriados from "../../src/paginas/Feriados/inserir";
import Folgas from "../../src/paginas/Folgas/inserir";
import Tratamentos from "../../src/paginas/Tratamentos/inserir";

export default function ModalInserir(props: any) {
  const { funcao } = props;

  let paginaInserir;

  if (funcao === "funcionarios") {
    paginaInserir = <Funcionario />;
  } else if (funcao === "feriados") {
    paginaInserir = <Feriados />;
  } else if (funcao === "profissao") {
    paginaInserir = <Profissao />;
  } else if (funcao === "folgas") {
    paginaInserir = <Folgas />;
  } else if (funcao === "servicos-profissao") {
    paginaInserir = <Tratamentos />;
  }

  return <>{paginaInserir}</>;
}
