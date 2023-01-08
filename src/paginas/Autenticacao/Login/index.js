import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../../services/api';
import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      alert('Falha no login, tente novamente.');
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
      </div>
    </div>
  );
}