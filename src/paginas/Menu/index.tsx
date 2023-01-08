import { Link } from "react-router-dom";
import { Container } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BuscarDadosApi from "../../util/util";

export default function Menu(): any {
  const perfil: any = [];
  perfil['1'] = 'Administrativo';
  perfil['2'] = 'Funcionario';
  perfil['3'] = 'Cliente';
  const tipoUsuario: any = localStorage.getItem("tipo_usuario");

  const servicos: any = BuscarDadosApi('servicos', 'listar', { idUsuario: localStorage.getItem('id_usuario') });

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <Container>
      <Navbar className="menu" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand className="logo" href="/home">
          <img width="40px" src="/logo-alternativa.svg" alt="salao" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="w-25 border" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Link className="m-2" to="/home">Home</Link>
            {servicos.map((element: any) =>
              <Link className="m-2" to={"/" + element.url}>{element.nome}</Link>

            )}
            <Link className="m-2" to="/configuracoes">Configurações</Link>
            <div className="m-2 text-white" onClick={logout} >Sair</div>
            <div className="m-2 text-info">
              <div className="d-flex" >
                <div>
                  {perfil[tipoUsuario]}
                </div>
                <div>

                </div>
                : &nbsp;
                <div >
                {localStorage.getItem('nome')}
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </Container>
  );
}