import { Link } from "react-router-dom";
import { Container } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { FaSignOutAlt, FaCalendarDay, FaUserPlus } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { RiBriefcase4Fill } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi"

export default function Menu(): any {
  const perfil: any = [
    'nenhum',
    'Administrativo',
    'Funcionario',
    'Cliente'];
  const tipoUsuario: any = localStorage.getItem("tipo_usuario");

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menuB" />
        <Navbar.Collapse id="responsive-navbar-nav bg-dark">
          <Nav className="me-auto">
          </Nav>
          <Nav className="mobile">
            <Link className="m-2" to="/home">Home</Link>
            {tipoUsuario === '1' && (
              <>
                <Link className="m-2" to={"/funcionarios"} >funcionários</Link>
                <Link className="m-2" to={"/feriados"} >feriados</Link>
                <Link className="m-2" to={"/folgas"} >folgas</Link>
                <Link className="m-2" to={"/tratamentos"} >tratamentos</Link>
                <Link className="m-2" to={"/profissao"} >profissão</Link>
              </>
            )
            }
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

          <Nav className="desktop" >
            <Link className="m-2" to="/home"><AiFillHome /></Link>
            {tipoUsuario === '1' && (
              <>
                <Link className="m-2" to={"/funcionarios"} ><FaUserPlus /></Link>
                <Link className="m-2" to={"/feriados"} ><FaCalendarDay /></Link>
                <Link className="m-2" to={"/folgas"} ><BsFillCalendarDayFill /></Link>
                <Link className="m-2" to={"/tratamentos"} ><GiHairStrands /></Link>
                <Link className="m-2" to={"/profissao"} ><RiBriefcase4Fill /></Link>
                <Link className="m-2" to={"/expediente"}><BiTimeFive /></Link>
              </>
            )
            }
            <Link className="m-2" to="/configuracoes"><AiFillSetting /></Link>
            <div className="m-2 text-white" onClick={logout} ><FaSignOutAlt /></div>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </Container>
  );
}