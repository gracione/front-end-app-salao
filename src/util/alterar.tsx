import { Modal } from 'react-responsive-modal';
import api from '../services/api';
import React, { useState } from 'react';

export default function Alterar({ modulo, dados }: any) {
  const [open, setOpen] = useState(false);

  function alterar(modulo: any, dados: any) {
    let url: any = "/" + modulo + "/alterar";
      api.post(url, dados).then((response) => (setOpen(response.data)));

  }
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <img src="/icons/salvo.png" alt="" />
          <h2>Item alterado com sucesso!</h2>
          <h2><a href={"/" + modulo}>ok</a></h2>
        </div>
      </Modal>
      <button onClick={() => alterar(modulo, dados)} >Alterar</button>
    </div>
  );
}