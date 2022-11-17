import api from "../services/api";

export default function ExcluirDadosApi(funcao: string, opcao: any, id: any) {
  const url = "/" + funcao + "/" + opcao;

  api.post(url, { id: id })
  
}
