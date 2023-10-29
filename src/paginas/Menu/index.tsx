import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogout } from "react-google-login";

const Menu = () => {
  const CLIENT_ID =
    "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";
  const PROFILE = ["nenhum", "Administrativo", "Funcionario", "Cliente"];
  const userType = localStorage.getItem("tipo_usuario");
  const userName = localStorage.getItem("nome");
  const userImageUrl = localStorage.getItem("img_url");
  const userProfileImage = userImageUrl ? (
    <img
      className="rounded-circle"
      width="30px"
      src={userImageUrl}
      alt="User"
    />
  ) : (
    <FontAwesomeIcon icon={faUser} />
  );

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar expand="lg" variant="dark" className="bg-transparent">
      <Navbar.Brand href="/" className="m-2">
        Realize
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu-navbar" className="w-25" />
      <Navbar.Collapse id="menu-navbar" className="">
        <Nav className="w-100 ml-auto d-flex justify-content-end"
          style={{ fontSize: '14px' }}
        >
          {userType === "1" && (
            <>
              <Nav.Link className="m-1" as={Link} to={"/funcionarios"}>
                Funcionario
              </Nav.Link>
              <Nav.Link className="m-1" as={Link} to={"/profissao"}>
                Profissão
              </Nav.Link>
              <Nav.Link className="m-1" as={Link} to={"/expediente"}>
                Horario de Funcionamento
              </Nav.Link>
              {/* <Nav.Link className="m-1" as={Link} to={"/galeria"}>
                Galeria
              </Nav.Link>*/}
              <NavDropdown className="m-1" title="Serviços">
                <NavDropdown.Item>
                  <Nav.Link
                    className="text-dark"
                    as={Link}
                    to={"/servicos-funcionario"}
                  >
                    Funcionario
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link
                    className="text-dark"
                    as={Link}
                    to={"/servicos-profissao"}
                  >
                    <p></p>
                    Profissão
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="m-1" title="Bloqueio de Datas">
                <NavDropdown.Item>
                  <Nav.Link className="text-dark" as={Link} to={"/feriados"}>
                    Feriados
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link className="text-dark" as={Link} to={"/folgas"}>
                    Folgas
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
          {/*<Nav.Link className="m-1" as={Link} to={"/chat"}>
            Chat
            </Nav.Link>*/}
          <NavDropdown className="m-1" title="Relatórios">
            <NavDropdown.Item>
              <Nav.Link
                className="text-dark"
                as={Link}
                to={"/relatorio/atendimento"}
              >
                Relatório de Atendimento
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link
                className="text-dark"
                as={Link}
                to={"/relatorio/financeiro"}
              >
                Relatório Financeiro
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="m-1" as={Link} to={"/configuracao-sistema"}>
            Configuração do Sistema
          </Nav.Link>

          <Nav.Link className="m-1" as={Link} to={"/ajuda"}>
            Ajuda
          </Nav.Link>
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
            <NavDropdown.Item as={Link} to="/configuracoes/alterar-foto">
              <FontAwesomeIcon icon={faCog} /> Alterar Foto do Perfil
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
