import api from '../services/api';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';

export default function Alterar(modulo: any, dados: any) {
  const [open, setOpen] = useState(false);

  function alterar(modulo: any, dados: any) {
    let url: any = "/" + modulo + "/alterar";
    let resultado = api.post(url, dados);
    console.log(resultado);
    setOpen(true);
  }
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <h1>Intem salvo</h1>
          <div><a href={"/" + modulo.modulo}>ok</a></div>
        </div>
      </Modal>
      <button onClick={() => alterar(modulo.modulo, dados)} >Alterar</button>
    </div>
  );
}