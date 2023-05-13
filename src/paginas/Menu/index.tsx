import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { GoogleLogout } from 'react-google-login';

const Menu = () => {
  const user = { name: 'Nome do Usuário', photo: 'url_da_foto' };
  const isAdmin = true; // Defina como true ou false conforme necessário
  const CLIENTE_ID = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";
  const perfil: any = ['nenhum', 'Administrativo', 'Funcionario', 'Cliente'];
  const tipoUsuario: any = localStorage.getItem("tipo_usuario");
  
  const handleLogout = () => {
      localStorage.clear();
      window.location.href = "/login";
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Realize</Navbar.Brand>
      <Navbar.Toggle aria-controls="menu-navbar" />
      <Navbar.Collapse id="menu-navbar">
        <Nav className="mr-auto">
        {tipoUsuario === '1' && (
          <>
          <Nav.Link><Link to={"/funcionarios"}>Funcionario</Link></Nav.Link>
          <Nav.Link><Link to={"/feriados"}>Feriados</Link></Nav.Link>
          <Nav.Link><Link to={"/folgas"}>Folgas</Link></Nav.Link>
          <Nav.Link><Link to={"/tratamentos"}>Procedimentos</Link></Nav.Link>
          <Nav.Link><Link to={"/profissao"}>Profissão</Link></Nav.Link>
          <Nav.Link><Link to={"/expediente"}>Expediente</Link></Nav.Link>
          <NavDropdown title="Relatórios">
            <NavDropdown.Item>
              Relatório de Vendas
            </NavDropdown.Item>
            <NavDropdown.Item>
              Relatório de Estoque
            </NavDropdown.Item>
          </NavDropdown>
          </>
        )}
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown
            title={
              <>
                <FontAwesomeIcon icon={faUser} /> {user.name}
              </>
            }
            id="user-dropdown"
          >
              <NavDropdown.Item href="/configuracoes">
                <FontAwesomeIcon icon={faCog} /> Configurações
              </NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>
            <GoogleLogout
                clientId={CLIENTE_ID}
                onLogoutSuccess={handleLogout}
                render={(renderProps) => (
                  <div onClick={renderProps.onClick}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                  </div>
                )}
              />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
