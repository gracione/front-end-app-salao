import api from "../services/api";

export default function ExcluirDadosApi(funcao: string, opcao: any, id: any) {
  const url = "/" + funcao + "/" + opcao;

  try{
    api.post(url, { id: id })
    window.location.href = "/" + funcao;
  }catch(err){
  }

}
