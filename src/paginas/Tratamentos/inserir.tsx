import { AdicionarItem, Conteudo } from "../../styles/global";
import { useState } from 'react';
import BuscarDadosApi from "../../util/util";
import Inserir from "../../util/inserir";

export default function InserirTratamento() {
  const [tratamento, setTratamento] = useState('');
  const [tempoGasto, setTempoGasto] = useState('');
  const [idProfissao, setIdProfissao] = useState("");
  const profissoes = BuscarDadosApi('profissao', 'listar');
  const [matrix, setMatrix] = useState(Array.from({ length: 1 }, () => Array.from({ length: 1 }, () => [])));
  const [tipoFiltro, setTipoFiltro] = useState(Array.from({ length: 1 }, () => [0]),);

  const nomeDoTipoFiltro = (linha: any, event: any) => {
    let nomeFiltro = [...tipoFiltro];
    nomeFiltro[linha] = event.target.value;
    setTipoFiltro(nomeFiltro);
  };

  const nomeDoFiltro = (linha: any, coluna: number, event: any) => {
    let aux: any = [...matrix];
    aux[linha][coluna][0] = event.target.value;
    setMatrix(aux);
    
  };
  const porcentagemDoFiltro = (row: any, column: number, event: any) => {
    let copy: any = [...matrix];
    copy[row][column][1] = event.target.value;
    setMatrix(copy);
  };

  const adicionarLinha = (tamanho: any) => {
    let linha: any = [...matrix];
    linha[tamanho].push([]);
    setMatrix(linha);
  }
  const adicionarColuna = (tamanho: any) => {
    let filtro: any = [...matrix];
    filtro.push([]);
    filtro[filtro.length - 1].push([]);

    setMatrix(filtro);

    let nomeFiltro = [...tipoFiltro];
    nomeFiltro.push([tamanho]);
    setTipoFiltro(nomeFiltro);
    console.log(filtro.length);
  }

  return (
    <Conteudo>
      <form action={"/tratamentos"} onSubmit={() => Inserir("tratamentos", {
        tratamento,
        tempoGasto,
        idProfissao,
        tipoDeFiltro: matrix,
        tipoFiltro: tipoFiltro
      })}>
        <div>
          <h2 >Adicionar Tratamento</h2>
          <input
            placeholder="Tratamento"
            value={tratamento}
            onChange={e => setTratamento(e.target.value)}
            required
          />
          <input
            placeholder="Tempo Gasto"
            type="time"
            onChange={e => setTempoGasto(e.target.value)}
            required
          />
          <select
            onChange={e => setIdProfissao(e.target.value)}
            required
          >
            <option value={0}>Escolha a Profissão</option>
            {profissoes.map((element) => (
              <option value={element.id}>{element.profissão}</option>
            ))}
          </select>

          <fieldset>
            <h4>Filtro</h4>
            {matrix.map((row: any, tipoFiltro: any) => (
              <div className="p-1" key={tipoFiltro} >
                <input
                  className="inputTable"
                  placeholder="Nome do filtro"
                  onChange={e => nomeDoTipoFiltro(tipoFiltro, e)}
                />
                {row.map((column: any, filtro: number) => (
                  <div className="display-flex" key={filtro}>
                    <input className="inputTable" placeholder="Filtro" type="text"
                      onChange={e => nomeDoFiltro(tipoFiltro, filtro, e)}
                    />
                    <input className="inputTable" placeholder="Porcentagem" type="number"
                      onChange={e => porcentagemDoFiltro(tipoFiltro, filtro, e)}
                    />

                  </div>
                ))}
                <div>
                  <div className="inputTable" onClick={() => adicionarLinha(tipoFiltro)}>+</div>
                </div>
              </div>
            ))}
            <AdicionarItem onClick={() => adicionarColuna(matrix.length)}>+</AdicionarItem>
          </fieldset>
        </div>
        <button type="submit">Salvar</button>
      </form>

    </Conteudo>
  );
}
