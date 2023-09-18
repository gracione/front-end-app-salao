import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Conteudo } from "./styles";
import { Header } from "../../styles/global";
import { useParams } from "react-router-dom";

function ListarFotos(props: any) {
  const { funcao, colunas } = props;
  const [listagem, setListagem] = useState([]);
  const { idAlbum } = useParams();

  useEffect(() => {
    api
      .post(`/galeria/listar-fotos`, { idAlbum })
      .then((response) => setListagem(response.data));
  }, [funcao]);

  console.log(listagem);
  return (
    <Header>
      <Conteudo>
      </Conteudo>
    </Header>
  );
}

export default ListarFotos;
