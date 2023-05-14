import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { GoogleLogout } from 'react-google-login';

const Menu = () => {
  const CLIENT_ID = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";
  const PROFILE = ['nenhum', 'Administrativo', 'Funcionario', 'Cliente'];
  const userType = localStorage.getItem("tipo_usuario");
  const userName = localStorage.getItem("nome");
  const userImageUrl = localStorage.getItem("img_url");
  const userProfileImage = userImageUrl ? <img className="rounded-circle" width="30px" src={userImageUrl} alt="User" /> : <FontAwesomeIcon icon={faUser} />;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar expand="lg" variant="dark" className="bg-transparent">
      <Navbar.Brand href="/" className="m-2">Realize</Navbar.Brand>
      <Navbar.Toggle aria-controls="menu-navbar" className="w-25" />
      <Navbar.Collapse id="menu-navbar" className="">
        <Nav className="w-100 ml-auto d-flex justify-content-end">
          {userType === '1' && (
            <div>
              <Nav.Link as={Link} to={"/funcionarios"}>Funcionario</Nav.Link>
              <Nav.Link as={Link} to={"/feriados"}>Feriados</Nav.Link>
              <Nav.Link as={Link} to={"/folgas"}>Folgas</Nav.Link>
              <Nav.Link as={Link} to={"/procedimentos"}>Procedimentos</Nav.Link>
              <Nav.Link as={Link} to={"/profissao"}>Profissão</Nav.Link>
              <Nav.Link as={Link} to={"/expediente"}>Expediente</Nav.Link>
              <NavDropdown title="Relatórios">
                <NavDropdown.Item>
                  Relatório de Vendas
                </NavDropdown.Item>
                <NavDropdown.Item>
                  Relatório de Estoque
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          )}
          <NavDropdown
            title={
              <>
                {userProfileImage}
                <span className="ml-2">{userName}</span>
              </>
            }
            id="user-dropdown"
          >
            <NavDropdown.Item as={Link} to="/configuracoes">
              <FontAwesomeIcon icon={faCog} /> Configurações
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>
              <GoogleLogout
                clientId={CLIENT_ID}
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
