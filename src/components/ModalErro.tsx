import { FaTimesCircle } from 'react-icons/fa';

export default function ModalErro(props: any) {

  return (
    <div>
      <div className='erro'>
        <img src="/icons/erro.png" alt="" />
        <div className='circulo'>
          x
        </div>
        <br />
        <h3>
          Veja se existe no sistema itens associados
        </h3>
        <a href={"/" + props.funcao}>
          <button className='bg-primary'>
            OK
          </button>
        </a>
      </div>
    </div>
  );
}