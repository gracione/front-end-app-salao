import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Conteudo } from "../../styles/global";
import api from "../../services/api";
import { Mensagem } from "./styles";

export default function Mensagens() {
  const { idUsuario } = useParams();
  const [mensagens, setMensagens]: any = useState([]);
  const [novaMensagem, setNovaMensagem] = useState("");

  useEffect(() => {
    api.post(`/mensagens/listar`, {
      remetente_id: localStorage.getItem("id_usuario"),
      destinatario_id: idUsuario
    }).then((response) => {
      setMensagens(response.data);
    });
  }, [idUsuario]);

  console.log(localStorage.getItem("id_usuario"));
  const enviarMensagem = () => {
    api.post(`/mensagens`, {
      conteudo: novaMensagem,
      remetente_id: localStorage.getItem("id_usuario"),
      destinatario_id: idUsuario
    }).then((response) => {
      setMensagens([...mensagens, response.data]);
      setNovaMensagem("");
    });
  };
  return (
    <Header>
      <Conteudo>
        <h1>Mensagens</h1>
        <div className="chat-container">
          <div className="mensagens-container">
            {mensagens.map((mensagem: any, index: any) => (
              <div className="mensagem" key={index}>
                <Mensagem>
                  <b>{mensagem.nome_remetente}: </b>
                  {mensagem.conteudo}
                </Mensagem>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button onClick={enviarMensagem}>Enviar</button>
          </div>
        </div>
      </Conteudo>
    </Header>
  );
}
