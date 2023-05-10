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

  function efetuarRegister(e) {
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
            localStorage.setItem('id_usuario', response.data.id_usuario);
            localStorage.setItem('nome', response.data.nome);
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
    <div className="registrar">
      <form onSubmit={efetuarRegister}>

        <h4 className='text-primary d-flex justify-content-between' >
          <Link className="bg-primary text-white rounded-circle voltar" to="/login">
            <FiArrowLeft size={20} />
          </Link>
          <div className='p-2 w-75' >
            Cadastrar Cliente
          </div>
        </h4>
        <div className='h-10 mb-1 input'>
          <input
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>
        {erroNome}
        <div className='h-10 mb-1 input'>
          <InputMask
            className='rounded'
            mask="(99) 9 9999-9999"
            placeholder="Telefone"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
        </div>
        {erroNumero}
        <div className='h-10 mb-1 input'>
          <select
            className='rounded'
            onChange={e => setId_Sexo(e.target.value)}
            required
          >
            <option value={0}>Escolha o sexo</option>
            <option value={1}>Masculino</option>
            <option value={2}>Feminino</option>
          </select>
        </div>
        {erroId_sexo}
        <div className='h-10 mb-1 input'>
          <input
            className='rounded'
            placeholder="Email"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        {erroEmail}
        <div className='h-10 mb-1 input'>
          <input
            className='rounded'
            placeholder="Senha"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {erroPassword}
        <div className='h-10 mb-2g input'>
          <input
            className='rounded'
            placeholder="Confirmar Senha"
            value={confirmPassword}
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className="button" type="submit">Cadastrar</button>
      </form>
      <img className='logo' src='logo.svg' />
    </div >
  );
}