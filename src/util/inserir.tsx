import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';
import api from '../../src/services/api';

export default function Inserir({modulo, dados}: any) {
  const [open, setOpen] = useState(false);
  function inserir(modulo: any, dados: any) {
    let url: any = "/" + modulo + "/inserir";
    api.post(url, dados).then((response) => (setOpen(response.data)));
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <img src="/icons/salvo.png" alt="" />
          <h2>Item salvo com sucesso!</h2>
          <h2><a href={"/" + modulo}>ok</a></h2>
        </div>
      </Modal>
      <button onClick={() => inserir(modulo, dados)} >Inserir</button>
    </div>
  );

}