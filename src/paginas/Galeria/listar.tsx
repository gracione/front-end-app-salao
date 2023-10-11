import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import api from "../../services/api";
import { Conteudo } from "./styles";
import { Adicionar, Header, TituloFuncao } from "../../styles/global";
import { Modal, Button } from "react-bootstrap";
import ModalSalvar from "../../components/ModalSalvar";
import ModalErro from "../../components/ModalErro";
import ModalInserir from "../../components/ModalInserir";
import InserirAlbum from "./inserir";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ListarGaleria(props: any) {
  const { funcao, colunas } = props;
  const [listagem, setListagem] = useState([]);
  const [open, setOpen] = useState(false);
  const [erroModal, setErro] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    api
      .post(`/galeria/listar`, {})
      .then((response) => setListagem(response.data));
  }, [funcao]);

  async function excluir(id: number): Promise<void> {
    const response = await api.post(`/${funcao}/excluir`, { id });
    setOpen(response.data);
    setErro(!response.data);
  }

  return (
    <Header>
      <Conteudo>
        <Modal show={open} onHide={() => setOpen(false)}>
          <ModalSalvar funcao={funcao} />
        </Modal>
        <Modal show={erroModal} onHide={() => setErro(false)}>
          <ModalErro funcao={funcao} />
        </Modal>
        <Modal
          show={modalAberto}
          onHide={() => setModalAberto(false)}
          dialogClassName="modal-escuro"
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Album</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InserirAlbum></InserirAlbum>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalAberto(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        <div>
          <TituloFuncao>
            <h3 className="text-capitalize">Galeria</h3>
            <Adicionar onClick={() => setModalAberto(true)}>+</Adicionar>
          </TituloFuncao>

          <div className="row">
            {listagem.map((element: any) => (
              <div className="col-4 col-md-2 mb-3" key={element.id}>
                <Nav.Link className=" m-1" as={Link}  to={`/galeria/album/${element.id}`}>
                  <div className="bg-green border" style={{ width: '150px', height: '150px' }}>
                    <img src="sem_imagem.png" className="w-100 h-100" alt="" />
                  </div>
                    {element.nome}
                </Nav.Link>
              </div>
            ))}
          </div>
        </div>
      </Conteudo>
    </Header>
  );
}
