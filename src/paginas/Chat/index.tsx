import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Conteudo } from "../../styles/global";
import api from "../../services/api";

export default function Chat() {
  const [listagem, setListagem] = useState<any[]>([]);

  useEffect(() => {
    api.post("/users/listar", {}).then((response) => {
      setListagem(response.data);
    });
  }, []);

  console.log(listagem);

  return (
    <Header>
      <Conteudo>
        <div className="d-flex flex-column">

          {listagem.map((usuario: any) => (
            <Link className="text-info" to={`/chat/${usuario.id}`} key={usuario.id}>
              x  ----  {usuario.nome}
            </Link>
          ))}
        </div>
      </Conteudo>
    </Header>
  );
}
