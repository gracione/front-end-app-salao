import { Link, useNavigate } from "react-router-dom";
//import { Container } from "./style";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {
  const history = useNavigate();
  function logout() {
    localStorage.clear();
    window.location.href = "/login";

  }

  return (
    <Navbar className="navbar navbar-dark bg-primary" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home">
          <img width="40px" onClick={() => history("/home")} src="/logo-alternativa.svg" alt="logo Cyan" />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/funcionarios">Funcionários</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/feriados">Feriados</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/folgas">Folgas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/expediente">Expediente</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tratamentos">Tratamentos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profissao">Profissões</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/configuracoes">Configurações</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout} >Sair</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
