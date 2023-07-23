import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Conteudo } from "../../styles/global";
import api from "../../services/api";
const defaultImgUrl = "./perfil/sem_usuario.png";

export default function Chat() {
  const [listagem, setListagem] = useState<any[]>([]);

  useEffect(() => {
    api.post("/users/listar", {
      id_usuario: localStorage.getItem("id_usuario")
    }).then((response) => {
      setListagem(response.data);
    });
  }, []);

  return (
    <Header>
      <Conteudo>
        <div className="d-flex flex-column">
          {listagem.map((usuario: any) => (
            <Link className="text-info" to={`/chat/${usuario.id}`} key={usuario.id}>
              <img
                className="rounded-circle col-1 h-25 border"
                src={usuario.img_url || defaultImgUrl}
                alt={usuario.nome}
              />
              <b className="p-2">
              {usuario.nome}
              </b>
            </Link>
          ))}
        </div>
      </Conteudo>
    </Header>
  );
}
