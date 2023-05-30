import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Conteudo } from "../../styles/global";
import api from "../../services/api";

export default function Chat() {
  const { idUsuario } = useParams();
  const [mensagens, setMensagens]:any = useState([]);
  const [novaMensagem, setNovaMensagem] = useState("");

  useEffect(() => {
    api.get(`/chat/${idUsuario}`).then((response) => {
      setMensagens(response.data);
    });
  }, [idUsuario]);

  const enviarMensagem = () => {
    api.post(`/chat/${idUsuario}`, { mensagem: novaMensagem }).then((response) => {
      setMensagens([...mensagens, response.data]);
      setNovaMensagem("");
    });
  };

  return (
    <div>
      <Header>
        <h1>Chat</h1>
      </Header>
      <Conteudo>
        <div className="chat-container">
          <div className="mensagens-container">
            {mensagens.map((mensagem:any, index:any) => (
              <div className="mensagem" key={index}>
                {mensagem.texto}
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
    </div>
  );
}
