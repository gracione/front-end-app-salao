import { Link, useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Menu() {
  const history = useNavigate();
  function logout() {
    localStorage.clear();
    window.location.href = "/login";

  }

  return (
    <Container>
      <img onClick={() => history("/home")} src="/logo-alternativa.svg" alt="logo Cyan" />
      <div className="opcoes">
        <Link to="/home"><p>Home</p></Link>
        <Link to="/funcionarios"><p>Funcionários</p></Link>
        <Link to="/feriados"><p>Feriados</p></Link>
        <Link to="/folgas"><p>Folgas</p></Link>
        <Link to="/expediente"><p>Expediente</p></Link>
        <Link to="/tratamentos"><p>Tratamentos</p></Link>
        <Link to="/profissao"><p>Profissões</p></Link>
        <Link to="/configuracoes"><p>Configurações</p></Link>
        <p onClick={logout} >
          SAIR
        </p>
      </div>
    </Container>
  );
}
