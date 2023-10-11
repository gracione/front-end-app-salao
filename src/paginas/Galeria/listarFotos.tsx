import api from "../../services/api";
import { Conteudo } from "./styles";
import { Header } from "../../styles/global";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function ListarFotos() {
  const [listagem, setListagem] = useState<any[]>([]);

  const [modalAberto, setModalAberto] = useState(false);
  const [descricao, setDescricao] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { idAlbum } = useParams();
  useEffect(() => {
    api
      .post("/galeria/listar-fotos", { id: idAlbum })
      .then((response) => setListagem(response.data));
  }, []);


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const enviarImagem = async (idAlbum:any) => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("idAlbum", idAlbum );
      try {
        await api.post("/galeria/upload-foto", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        window.location.reload();
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
        <div className="row">
          {listagem.map((element: any) => (
            <div key={element.id} className="col-4 col-md-2 m-2 bg-white"
              style={{ width: '159px', height: '150px' }}>
              <img src={element.imageUrl} alt={element.description}
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </div>
        <button onClick={() => setModalAberto(true)}>
          <FontAwesomeIcon icon={faPlus} /> Adicionar Foto
        </button>

        <Modal
          show={modalAberto}
          onHide={() => setModalAberto(false)}
          dialogClassName="modal-escuro"
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Foto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Imagem:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalAberto(false)}>
              Fechar
            </Button>
            <button type="button" onClick={() => enviarImagem(idAlbum)}>
              Enviar Imagem
            </button>


          </Modal.Footer>
        </Modal>

      </Conteudo>
    </Header>
  );
}

