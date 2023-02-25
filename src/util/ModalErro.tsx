export default function ModalErro(props: any) {

  return (
    <div className='modal '>
      <div className='salvo text-danger'>
        <img src="/icons/erro.png" alt="" />
        <h3>Erro<br></br>
          <div className='text-lowercase'>
            veja se existe no sistema itens associados
          </div>
        </h3>
        <h2><a href={"/" + props.funcao}>Ok</a></h2>
      </div>
    </div>
  );
}