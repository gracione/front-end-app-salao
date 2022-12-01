import { Link, useNavigate } from "react-router-dom";
//import { Container } from "./style";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BuscarDadosApi from "../../util/util";

export default function Menu() {
  const history = useNavigate();

  const servicos = BuscarDadosApi('servicos', 'listar', { idUsuario: localStorage.getItem('id_usuario') });

  console.log(servicos);
  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <Navbar className="navbar navbar-dark bg-primary d-flex justify-content-between w-100" expand="lg">
          <Navbar.Brand href="#home" className="border" >
            <img width="40px" onClick={() => history("/home")} src="/logo-alternativa.svg" alt="logo Cyan" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="w-25 border"  />
          <Navbar.Collapse id="basic-navbar-nav"  className="bg-info border" >
            <div className="d-flex f-right bg-dark" >
              <Nav className="" >
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
              </Nav>
            </div>
          </Navbar.Collapse>
    </Navbar>
    
  );
}
