import { Modal } from 'react-responsive-modal';
import api from '../../services/api';
import React, { useState } from 'react';
import { Container } from './style';

export default function Alterar({ modulo, dados }: any) {
  const [open, setOpen] = useState(false);

  function alterar(modulo: any, dados: any) {
    let url: any = "/" + modulo + "/alterar";
    api.post(url, dados);
    setOpen(true);
  }
  return (
    <Container>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <h2>Item salvo com sucesso!</h2>
          <div><a href={"/" + modulo}>ok</a></div>
        </div>
      </Modal>
      <button onClick={() => alterar(modulo, dados)} >Alterar</button>
    </Container>
  );
}