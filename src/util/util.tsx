import { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string, opcao: string, dados: any = false): any[] {

  const [listagem, setListagem]:any = useState([  ]);
  let url = "/" + funcao + "/" + opcao;

  useEffect(() => {
    api.post(url, {dados: dados})
    .then((response) => setListagem(response.data))
    .catch((error) => {
      alert('Fazer login novamente.');
      localStorage.clear();
      window.location.href = "/login";
    });
  }, []);

  return listagem;
}