/* eslint-disable jsx-a11y/anchor-has-content */
import { Modal } from 'react-responsive-modal';
import api from '../../src/services/api';
import { Adicionar, Conteudo, Header } from '../styles/global';
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

export default function Listar(props: any) {
  const funcao: any = props.funcao;
  const colunas: any = props.colunas;
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
        <td><a href={link['editar']} className='editar' ><BsFillPencilFill></BsFillPencilFill></a></td>
        <td onClick={() => excluir(element.id)} className='excluir'>
          <FaTrashAlt></FaTrashAlt>
        </td>
      </tr>

    )
  });


  return (
    <Header>
      <Conteudo>
      <Modal open={open} onClose={() => setOpen(false)}>
          <div className='modal'>
            <img src="/icons/erro.png" alt="" />
            <h2>Item excluido com susseco</h2>
            <h2><a href={"/" + funcao}>Ok</a></h2>
          </div>
        </Modal>
        <Modal open={erro} onClose={() => setErro(false)}>
          <div className='modal'>
            <img src="/icons/erro.png" alt="" />
            <h2>Erro</h2>
            <h2><a href={"/" + funcao}>Ok</a></h2>
          </div>
        </Modal>
        <h3 className='p-1' >
          {funcao}
        </h3>
        <table>
          <tr>
            {colunas.map((nome: any) => (
              <th>{nome.replaceAll('_', ' ')}</th>
            ))}
            <th colSpan={2} ></th>
          </tr>

          {listar}
        </table>
      </Conteudo>
      <Adicionar href={funcao + "/adicionar"}>+</Adicionar>
    </Header>
  );
}