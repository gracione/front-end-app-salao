import { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string, opcao: string, dados: any = false): any[] {

  const [listagem, setListagem] = useState([]);
  let url = "/" + funcao + "/" + opcao;

  useEffect(() => {
      api.post(url, {
//        id: 1,
        dados: dados
      })
        .then((response) => setListagem(response.data));
  }, []);

  return listagem;
}