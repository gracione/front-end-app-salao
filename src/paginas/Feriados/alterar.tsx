import { Container, Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/Alterar/alterar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../src/services/api";
import { Modal } from 'react-responsive-modal';

export default function AlterarFeriado() {
  const [listagem, setListagem]: any = useState([]);
  const { idFeriado } = useParams();

  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  useEffect(() => {
    api
      .post("/feriados/listar-id", {
        idFeriado
      })
      .then((response) => setListagem(response.data[0]));

  }, []);

  return (
    <Container>
      <Header>
        <Conteudo>
          <div>
            <h2>Alterar Feriado</h2>
            <input
              type="text"
              defaultValue={listagem.nome}
              placeholder="Nome do feriado"
              onChange={e => setFeriado(e.target.value)}
              required
            />
            <input
              type="date"
              defaultValue={listagem.data}
              onChange={e => setData(e.target.value)}
              required
            />
          </div>
          <Alterar 
          modulo="feriados"
          data={{id:idFeriado,data,nome}}
          />
        </Conteudo>
      </Header>
    </Container>
  );
}
