import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import api from '../../../services/api';
import './styles.ts';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const clientId = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";

  async function efetuarLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id_usuario', response.data.id_usuario);
      localStorage.setItem('tipo_usuario', response.data.tipo_usuario);
      localStorage.setItem('nome', response.data.nome);
      window.location.href = "/home";
    } catch (err) {
      alert('Usuário e/ou senha inválidos.');
    }
  }
  return (
    <div className='content'>
      <div className='login'>
        <div className='d-flex justify-content-center'>
          <div className='w-50' >
            <img className='logo' src='logo.svg' />
          </div>
        </div>
        <form onSubmit={efetuarLogin}>
          <input
            className='rounded w-100'
            name='email'
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='rounded w-100'
            name='password'
            placeholder="Sua Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="rounded" type="submit">Entrar</button>

          <Link className="button text-white bg-primary rounded" to="/registrar">
            Cadastrar Clitente
          </Link>
        </form>
        <GoogleOAuthProvider clientId={clientId}>
            <Google />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}