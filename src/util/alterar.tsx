import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import api from '../services/api';

interface Props {
  modulo: string;
  dados: any;
}

export default function Alterar({ modulo, dados }: Props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function alterar(modulo: string, dados: any) {
    let url = `/${modulo}/alterar`;
    api.post(url, dados)
      .then((response) => setOpen(response.data))
      .catch((error) => setError("Ocorreu um erro ao alterar o item."));
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <div className='salvo'>
            <img src="/icons/salvo.png" alt="" />
            <h2 className='text-dark'>Item alterado com sucesso!</h2>
            <h2>
              <a href={`/${modulo}`}>ok</a>
            </h2>
          </div>
        </div>
      </Modal>
      {error && (
        <div className='modal'>
          <div className='error'>
            <h2 className='text-dark'>{error}</h2>
          </div>
        </div>
      )}
      <br />
      <button onClick={() => alterar(modulo, dados)}>Alterar</button>
    </div>
  );
}
