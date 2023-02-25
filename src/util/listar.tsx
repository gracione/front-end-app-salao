import { Modal } from 'react-responsive-modal';
import api from '../../src/services/api';
import { Adicionar, Conteudo, Header, TituloFuncao } from '../styles/global';
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import ModalSalvar from './ModalSalvar';
import ModalErro from './ModalErro';
import { Link } from "react-router-dom";

export default function Listar(props: any) {
  const funcao: any = props.funcao;
  const colunas: any[] = props.colunas;
  const [listagem, setListagem] = useState([]);
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.post("/" + funcao + "/listar", {
    }).then((response) => setListagem(response.data));
  }, [funcao]);

  let listar: any = [];

  function excluir(id: any) {

    api.post("/" + funcao + "/excluir", { id: id })
      .then((response) => (
        setOpen(response.data),
        setErro(!response.data))
      );
  }

  let link: any = [];
  listagem.forEach((element: any) => {
    link['editar'] = "/" + funcao + "/alterar/" + element.id;
    link['listagem'] = "/" + funcao;

    listar.push(
      <tr>
        {colunas.map((nomeColuna: any) => (
          <td>{element[nomeColuna]}</td>
        ))}
        <td width={"20px"}>
          <a href={link['editar']} className='editar' ><BsFillPencilFill /></a>
        </td>
        <td width={"20px"} onClick={() => excluir(element.id)} className='excluir'>
          <FaTrashAlt></FaTrashAlt>
        </td>
      </tr>

    )
  });

  return (
    <Header>
      <Conteudo>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalSalvar funcao={funcao} />
        </Modal>
        <Modal open={erro} onClose={() => setErro(false)}>
          <ModalErro  funcao={funcao} />
        </Modal>
        <TituloFuncao>
          <h3>
            {funcao}
          </h3>
          <Link to={"adicionar"}>
            <Adicionar>+</Adicionar>
          </Link>
        </TituloFuncao>
        <table className='w-100'>
          <tr>
            {colunas.map((nome: any) => (
              <th className='text-capitalize' >{nome.replaceAll('_', ' ')}</th>
            ))}
            <th colSpan={2} ></th>
          </tr>

          {listar}
        </table>
      </Conteudo>
    </Header>
  );
}