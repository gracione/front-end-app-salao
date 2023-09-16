import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Conteudo, Header } from "../../../styles/global";
import api from "../../../services/api";

export default function Configuracoes() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const enviarImagem = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        await api.post("/configuracoes/enviar-imagem", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => localStorage.setItem('img_url', response.data));
        window.location.href = "/configuracoes/alterar-foto";
        console.log("Imagem enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
      }
    } else {
      console.error("Nenhuma imagem selecionada para enviar.");
    }
  };

  return (
    <Header>
      <Conteudo>
        <h1>Imagem do Perfil</h1>

        <form>
          <label>Escolha a imagem</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="button" onClick={enviarImagem}>
            Enviar Imagem
          </button>
        </form>
      </Conteudo>
    </Header>
  );
}
