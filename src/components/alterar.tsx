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

  // State to track whether an error occurred for the inputs
  const [inputError, setInputError] = useState<boolean>(false);

  function alterar(modulo: string, dados: any) {
    let url = `/${modulo}/alterar`;
    api.post(url, dados)
      .then((response) => setOpen(response.data))
      .catch((error) => {
        setError("Ocorreu um erro ao alterar o item.");
        setInputError(true); // Set input error to true
      });
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <div className='salvo text-success'>
            <img src="/icons/salvo.png" alt="" />
            <h2 className='text-success'>Item alterado com sucesso!</h2>
            <h2>
              <a href={`/${modulo}`}>ok</a>
            </h2>
          </div>
        </div>
      </Modal>
      {error && (
        <div className='erro'>
          <img src="/icons/erro.png" alt="" />
          <div className='circulo'>
            x
          </div>
          <br />
          <h3>
            {error}
          </h3>
        </div>
      )}
      <br />
      <button onClick={() => alterar(modulo, dados)}>Alterar</button>
    </div>
  );
}
