import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BuscarDadosApi from "../../util/util";

export default function Menu() {
  const perfil: any = [];
  perfil['1'] = 'Administrativo';
  perfil['2'] = 'Funcionario';
  perfil['3'] = 'Cliente';
  const tipoUsuario: any = localStorage.getItem("tipo_usuario");

  const history = useNavigate();
  const servicos = BuscarDadosApi('servicos', 'listar', { idUsuario: localStorage.getItem('id_usuario') });

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
          <Nav>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            {servicos.map((element) => (
              <Nav.Link>
                <Link to={"/" + element.url}>{element.nome}</Link>
              </Nav.Link>
            ))}
            <Nav.Link>
              <Link to="/configuracoes">Configurações</Link>
            </Nav.Link>
            <Nav.Link>
              <NavDropdown.Item onClick={logout} >Sair</NavDropdown.Item>
            </Nav.Link>
            <Nav.Link>
              <div>
                Perfil:{perfil[tipoUsuario]}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </Container>
  );
}