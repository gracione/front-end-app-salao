import api from '../../src/services/api';

export default function Inserir(modulo: any, dados: any) {
  const url = "/" + modulo + "/inserir";
  api.post(url, dados);

  return "/" + modulo;
}