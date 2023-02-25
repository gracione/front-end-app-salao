export default function ModalSalvar(props: any) {

  return (
          <div className='modal'>
            <div className='salvo'>
              <img src="/icons/erro.png" alt="" />
              <h2>Item excluido com susseco</h2>
              <h2><a href={"/" + props.funcao}>Ok</a></h2>
            </div>
          </div>
  );
}