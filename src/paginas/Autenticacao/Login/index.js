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
      localStorage.setItem('token', response.data);
      window.location.href = "/home";
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src='logo.svg' />
        <form onSubmit={efetuarLogin}>
          <input
            name='email'
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            name='password'
            placeholder="Sua Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/registrar">
            <FiLogIn size={16} color="#3498db" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}