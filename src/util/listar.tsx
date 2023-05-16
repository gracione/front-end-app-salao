import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import api from '../../src/services/api';
import { Adicionar, Conteudo, Header, TituloFuncao } from '../styles/global';
import ModalSalvar from './ModalSalvar';
import ModalErro from './ModalErro';

export default function Listar(props: any) {
  const { funcao, colunas } = props;
  const [listagem, setListagem] = useState([]);
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.post(`/${funcao}/listar`, {}).then((response) => setListagem(response.data));
  }, [funcao]);

  async function excluir(id: number): Promise<void> {
    const response = await api.post(`/${funcao}/excluir`, { id });
    setOpen(response.data);
    setErro(!response.data);
  }

  return (
    <Header>
      <Conteudo>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalSalvar funcao={funcao} />
        </Modal>
        <Modal open={erro} onClose={() => setErro(false)}>
          <ModalErro funcao={funcao} />
        </Modal>
        <TituloFuncao>
          <h3>{funcao}</h3>
          <Link to="adicionar">
            <Adicionar>+</Adicionar>
          </Link>
        </TituloFuncao>
        <table className="w-100">
          <thead>
            <tr>
              {colunas.map((nome: string) => (
                <th className="text-capitalize" key={nome}>
                  {nome.replaceAll('_', ' ')}
                </th>
              ))}
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {listagem.map((element: any) => (
              <tr key={element.id}>
                {colunas.map((nomeColuna: any) => (
                  <td key={nomeColuna}>{element[nomeColuna]}</td>
                ))}
                <td width="20px">
                  <a href={`/${funcao}/alterar/${element.id}`} className="editar">
                    <BsFillPencilFill />
                  </a>
                </td>
                <td width="20px" onClick={() => excluir(element.id)} className="excluir">
                  <FaTrashAlt />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Conteudo>
    </Header>
  );
}
