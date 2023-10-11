import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Funcionarios from "./funcionarios";
import HorarioMarcado from "./horariosMarcados";
import { AgendarHorario, Container, HorariosMarcados } from "./styles";
import { ADM, CLIENTE, FUNCIONARIO } from "../../constantes";

export default function Home() {
  const { tipo_usuario } = localStorage;
  const [nomeCliente, setNomeCliente] = useState("");

  const compartilharWhatsApp = () => {
    const link = window.location.href;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      link
    )}`;
    window.open(url, "_blank");
  };

  const compartilharInstagram = () => {
    const link = window.location.href;
    const url = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
    window.open(url, "_blank");
  };

  const compartilharFacebook = () => {
    const link = window.location.href;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Container>
      <div className="home-usuario">
        <AgendarHorario>
          <h4 className="w-100 d-flex justify-content-center">
            Agendar Horário
          </h4>
          <div className="w-100">
            {tipo_usuario === ADM && (
              <h5>Etapa Escolher Funcionário e Profissão</h5>
            )}
            {tipo_usuario === FUNCIONARIO && <h5>Etapa Escolher Profissão</h5>}
            {tipo_usuario === CLIENTE && (
              <h5>Etapa Escolher Funcionário e Profissão</h5>
            )}

            {tipo_usuario !== CLIENTE && (
              <input
                type="text"
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Digite o nome do cliente"
                required
              />
            )}
            <hr />
          </div>
          <Funcionarios nomeCliente={nomeCliente} />
        </AgendarHorario>
        <div className="mt-5 h-50 align-items-center">
          <h2>Compartilhe o link com seus clientes</h2>
          <div className="h-75 d-flex justify-content-around">
            <FontAwesomeIcon
              className="w-25 h-25"
              onClick={compartilharWhatsApp}
              icon={faWhatsapp}
            />
            <FontAwesomeIcon
              className="w-25 h-25"
              onClick={compartilharInstagram}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="w-25 h-25"
              onClick={compartilharFacebook}
              icon={faFacebook}
            />
          </div>
        </div>
      </div>

      <HorariosMarcados>
        <HorarioMarcado />
      </HorariosMarcados>
    </Container>
  );
}
