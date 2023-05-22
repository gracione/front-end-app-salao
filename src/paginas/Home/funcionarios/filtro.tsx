import React, { useState, useEffect } from "react";
import api from "../../../services/api";

export default function Filtros(props: any) {
  const [filtro, setFiltro] = useState([]);
  const [matrisFiltros, setMatrisFiltros] = useState(
    () => Array.from({ length: filtro.length },
      () => [0])
  );
  const adicionarFiltros = (row: any, event: any) => {
    let copy: any = [...matrisFiltros];
    copy[row] = event.target.value;
    props.setIdFiltro(copy);
    setMatrisFiltros(copy);
  };

  useEffect(() => {
    api.post("/filtro/listar", {
      id_tratamento: props.data
    })
      .then((response) => setFiltro(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    const copy =
      () => Array.from({ length: filtro.length },
        () => [0])
    setMatrisFiltros(copy);
  }, [props.data]);

  let filtroD: any = [];
  filtro.forEach((element: any) => {
    filtroD.push(
      <div>
        <label htmlFor="">
          {element.nome}
        </label>
        <select
          onChange={e => adicionarFiltros(element.id, e)}
        >
          <option value="">------ Selecione ------</option>
          {(element.filtro).map((row: any) => (
            <option
              value={row.id}
            >
              {row.nome}
            </option>
          ))}
        </select>
      </div>
    )
  });
  return (
    <>
      {filtroD}
    </>
  )
}
