import { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string, opcao: string, dados: any = false) {
  const [listagem, setListagem] = useState<any>([]);
  let url = "/" + funcao + "/" + opcao;

  useEffect(() => {
    if (!dados) {
      console.log("dados");
      api.get(url)
        .then((response) => setListagem(response.data))
    } else {
      api.post(url, { dados: dados })
        .then((response) => setListagem(response.data))
    }
  }, [url, dados]);

  return listagem;
}
