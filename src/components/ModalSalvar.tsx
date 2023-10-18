export default function ModalSalvar(props: any) {

  return (
          <div className='modal'>
            <div className='salvo'>
              <img src="/icons/erro.png" alt="" />
              <h2 className='text-success'>Item excluído com sucesso</h2>
              <h2 className='text-success'><a href={"/" + props.funcao}>Ok</a></h2>
            </div>
          </div>
  );
}