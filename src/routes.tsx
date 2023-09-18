import { Container } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/index';
import Login from './paginas/Autenticacao/Login/index';
import Registrar from './paginas/Autenticacao/Registrar/index';
import Informacoes from './paginas/Informacoes/index';
import Configuracoes from "./paginas/Configuracoes";
import AlterarFuncionario from "./paginas/Funcionarios/alterar";
import AdicionarProfissao from "./paginas/Profissoes/adicionar";
import AlterarProfissao from "./paginas/Profissoes/alterar";
import EtapaCalendario from "./paginas/EtapaCalendario";
import InserirFuncionario from "./paginas/Funcionarios/inserir";
import InserirTratamento from "./paginas/Tratamentos/inserir";
import AlterarTratamento from "./paginas/Tratamentos/alterar";
import InserirExpediente from "./paginas/Expediente/inserir";
import InserirFeriado from "./paginas/Feriados/inserir";
import InserirFolga from "./paginas/Folgas/inserir";
import AlterarFeriado from './paginas/Feriados/alterar';
import RelatorioAtendimento from './relatorio/atendimento';
import RelatorioFinanceiro from './relatorio/financeiro';
import Listar from './util/listar';
import Menu from './paginas/Menu';
import AlterarFolga from './paginas/Folgas/alterar';
import ConfiguracoesSistema from './paginas/ConfiguracoesSistema';
import AlterarFoto from './paginas/Configuracoes/AlterarFoto';
import Chat from './paginas/Chat/index';
import ChatDirect from './paginas/Chat/direct';
import InserirAlbum from './paginas/Galeria/inserir';
import ListarGaleria from './paginas/Galeria/listar';
import ListarFotos from './paginas/Galeria/listarFotos';

export default function Rota() {
    const token: any = localStorage.getItem("token");
    const currentUrl: any = window.location.href.toLowerCase();
    if (token === null || token == 'undefined') {
        if (!currentUrl.includes("/registrar") && !currentUrl.includes("/login")) {
            window.location.href = "/login";
        }
        return (
            <Container>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrar" element={<Registrar />} />
                </Routes>
            </Container>
        );
    } else {
        if (currentUrl.includes("/registrar") || currentUrl.includes("/login")) {
            window.location.href = "/home";
        }
    }

    return (
        <Container>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                <Route path="/informacoes/funcionario=:idUsuarioFuncionario/:idProfissao/:nomeCliente" element={<Informacoes />} />
                <Route path="/informacoes/funcionario=:idUsuarioFuncionario/:idProfissao" element={<Informacoes />} />

                <Route path="/escolher-horario/funcionario=:idFuncionario/:idProfissao/:idTratamento/:idFiltro" element={<EtapaCalendario />} />
                <Route path="/escolher-horario/funcionario=:idFuncionario/:idProfissao/:idTratamento/:idFiltro/:nomeCliente" element={<EtapaCalendario />} />

                <Route path="/funcionarios" element={<Listar funcao="funcionarios" colunas={["nome", "profissão"]} />} />
                <Route path="/funcionarios/alterar/:idFuncionario" element={<AlterarFuncionario />} />
                <Route path="/funcionarios/adicionar" element={<InserirFuncionario />} />

                <Route path="/feriados" element={<Listar funcao="feriados" colunas={["nome", "data"]} />} />
                <Route path="/feriados/adicionar" element={< InserirFeriado />} />
                <Route path="/feriados/alterar/:idFeriado" element={< AlterarFeriado />} />

                <Route path="/folgas" element={<Listar funcao="folgas" colunas={["funcionario", "profissao","folga"]} />} />
                <Route path="/folgas/adicionar" element={< InserirFolga />} />
                <Route path="/folgas/alterar/:idFolga" element={< AlterarFolga />} />

                <Route path="/expediente" element={<Listar funcao="expediente" colunas={["funcionario", "inicio_de_expediente", "inicio_horario_de_almoco", "fim_horario_de_almoco", "fim_de_expediente"]} />} />
                <Route path="/expediente/adicionar" element={< InserirExpediente />} />
                <Route path="/expediente/alterar/:idExpediente" element={< InserirExpediente />} />

                <Route path="/servicos-profissao" element={<Listar funcao="tratamentos" colunas={["tratamento", "profissão", "tempo_gasto"]} />} />
                <Route path="/servicos-profissao/adicionar" element={<InserirTratamento />} />
                <Route path="/servicos-profissao/alterar/:idTratamento" element={<AlterarTratamento />} />

                <Route path="/profissao" element={<Listar funcao="profissao" colunas={["profissão"]} />} />
                <Route path="/profissao/adicionar" element={<AdicionarProfissao />} />
                <Route path="/profissao/alterar/:idProfissao" element={<AlterarProfissao />} />

                <Route path="/relatorio/atendimento" element={<RelatorioAtendimento />} />
                <Route path="/relatorio/financeiro" element={<RelatorioFinanceiro />} />

                <Route path="/galeria" element={<ListarGaleria funcao="profissao" colunas={["profissão"]}/>} />
                <Route path="/galeria/inserir-album" element={<InserirAlbum />} />
                <Route path="/galeria/album/:id" element={<ListarFotos funcao="profissao" colunas={["profissão"]}/>} />

                <Route path="/configuracoes" element={<Configuracoes />} />
                <Route path="/configuracoes/alterar-foto" element={<AlterarFoto />} />
                <Route path="/configuracao-sistema" element={<ConfiguracoesSistema />} />

                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/:idUsuario" element={<ChatDirect />} />

            </Routes>
        </Container>
    );
}