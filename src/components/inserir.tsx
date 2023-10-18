import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';
import api from '../../src/services/api';

export default function Inserir({ modulo, dados }: any) {
  const [open, setOpen] = useState(false);

  function inserir(modulo: string, dados: any) {
    const url = `/${modulo}/inserir`;
    api.post(url, dados).then((response) => setOpen(response.data));
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal">
          <div className="salvo">
            <img src="/icons/salvo.png" alt="" />
            <h2 className='text-success'>Item salvo com sucesso!</h2>
            <h2>
              <a href={`/${modulo}`}>ok</a>
            </h2>
          </div>
        </div>
      </Modal>
      <button className='bg-light text-body' onClick={() => inserir(modulo, dados)}>Inserir</button>
    </div>
  );
}
