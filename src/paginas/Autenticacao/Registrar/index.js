import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import InputMask from "react-input-mask";
import api from '../../../services/api';
import './styles.css';


export default function Registrar() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [erroNome, setErroNome] = useState(null)
  const [erroNumero, setErroNumero] = useState(null)
  const [erroId_sexo, setErroId_sexo] = useState(null)
  const [erroEmail, setErroEmail] = useState(null)
  const [erroPassword, setErroPassword] = useState(null)

  async function efetuarRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      numero,
      id_sexo,
      email,
      password,
      "password_confirmation": confirmPassword
    };

    try {
      api.post('/registrarCliente', data)
        .then(async (res) => {
          if (res.data.token) {
            const response = await api.post('/registrarCliente', { email, password });
            localStorage.setItem('token', response.data.access_token);
            window.location.href = "/home";
          } else {
            if (res.data.nome) {
              setErroNome(
                <div className='alerta-erro' >
                  {res.data.nome[0]}
                </div>
              );
            }
            if (res.data.numero) {
              setErroNumero(
                <div className='alerta-erro' >
                  {res.data.numero[0]}
                </div>
              );
            }
            if (res.data.id_sexo) {
              setErroId_sexo(
                <div className='alerta-erro' >
                  {res.data.id_sexo[0]}
                </div>
              );
            }
            if (res.data.email) {
              setErroEmail(
                <div className='alerta-erro' >
                  {res.data.email[0]}
                </div>
              );
            }
            if (res.data.password) {
              setErroPassword(
                <div className='alerta-erro' >
                  {res.data.password[0]}
                </div>
              );
            }
          }
        });
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e agende seu horario.</p>

        </section>
        <form onSubmit={efetuarRegister}>
          <input
            placeholder="Seu Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          {erroNome}

          <InputMask
            mask="(99) 9 9999-9999"
            placeholder="Seu Numero"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
          {erroNumero}

          <select
            onChange={e => setId_Sexo(e.target.value)}
            required
          >
            <option value={0}>Escolha o sexo</option>
            <option value={1}>Masculino</option>
            <option value={2}>Feminino</option>
          </select>
          {erroId_sexo}
          <input
            placeholder="Seu E-mail"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          {erroEmail}
          <input
            placeholder="Digite sua Senha"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          {erroPassword}

          <input
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">Cadastrar</button>
          <Link className="back-link" to="/login">
            <FiArrowLeft size={16} color="#3498db" />
            Já possuo cadastro
          </Link>
        </form>
      </div>
    </div>
  );
}