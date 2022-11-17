import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillPencilFill } from "react-icons/bs";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao } from './styles';
import api from '../../services/api';

interface tipoDeDados {
    idHorario: string;
    cliente: string;
    funcionario: string;
    tratamento: string;
    telefone: string;
    horario: string;
    data: string;
}

function Card({ idHorario, cliente, funcionario, tratamento, telefone, horario, data }: tipoDeDados) {
    let linkTelefone = "https://api.whatsapp.com/send/?phone=+55" + telefone + "&text=oi";
    function desmarcarHorario(idHorario: any) {
        api.post("/horario/excluir", {
            id: idHorario
        })
        window.location.href = "/home?desmarcado";
    }
    return (
        <Cartao>
            <div className='dados-horario'>
                <div className="horario" >
                    {horario}
                </div>
                <div className="data" >
                    {data}
                </div>
            </div>
            <ul className='dados-usuario' >
                <li className="cliente" >
                    <div className=''>cliente: {cliente}</div>
                    <BsFillPencilFill className='lapis' />
                </li>
                <li>Funcionario: {funcionario}</li>
                <li>Tratamento: {tratamento}</li>
                <li>
                    <a href={linkTelefone}>
                        telefone: {telefone+" "}
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
                <div className='confirmar-desmarcar' >
                    <div className='confirmar'>CONFIRMAR</div>
                    <div className='desmarcar' onClick={() => desmarcarHorario(idHorario)} >DESMARCAR</div>
                </div>
            </ul>
        </Cartao>
    );

}

export default Card;