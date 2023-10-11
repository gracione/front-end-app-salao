import { useState } from "react";
import Inserir from "../../components/inserir";
import { Form, Button } from "react-bootstrap";

export default function Adicionar() {
  const [nome, setNome] = useState("");

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            placeholder="Nome da profissão"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>
        <Inserir modulo="profissao" dados={{ nome }} />
      </Form>
    </>
  );
}
