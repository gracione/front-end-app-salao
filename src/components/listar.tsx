import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import api from "../../src/services/api";
import { Adicionar, Conteudo, Header, TituloFuncao } from "../styles/global";
import { Modal, Button } from "react-bootstrap";
import ModalSalvar from "./ModalSalvar";
import ModalErro from "./ModalErro";
import ModalInserir from "./ModalInserir";

function removeAccents(str: any) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Listar(props: any) {
  const { funcao, colunas } = props;
  const [listagem, setListagem] = useState([]);
  const [open, setOpen] = useState(false);
  const [erroModal, setErro] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const tituloFuncao = funcao.replace(/-/g, " ");

  useEffect(() => {
    api
      .post(`/${funcao}/listar`, {})
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
            <Modal.Title>Adicionar {funcao}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalInserir funcao={funcao} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalAberto(false)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        <div>
          <TituloFuncao>
            <h3 className="text-capitalize">{tituloFuncao}</h3>
            <Adicionar onClick={() => setModalAberto(true)}>+</Adicionar>
          </TituloFuncao>

          <table className="w-100">
            <thead>
              <tr>
                {colunas.map((nome: string) => (
                  <th className="text-capitalize" key={nome}>
                    {nome.replaceAll("_", " ")}
                  </th>
                ))}
                <th colSpan={2}></th>
              </tr>
            </thead>
            <tbody>
              {listagem.map((element: any) => (
                <tr key={element.id}>
                  {colunas.map((nomeColuna: any) => (
                    <td key={nomeColuna}>{element[removeAccents(nomeColuna)]}</td>
                  ))}
                  <td width="20px">
                    <a
                      href={`/${funcao}/alterar/${element.id}`}
                      className="editar"
                    >
                      <BsFillPencilFill />
                    </a>
                  </td>
                  <td
                    width="20px"
                    onClick={() => excluir(element.id)}
                    className="excluir"
                  >
                    <FaTrashAlt />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Conteudo>
    </Header>
  );
}
