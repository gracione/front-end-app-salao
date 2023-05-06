import { useState } from 'react';
import { Container } from './styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const clientId = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";

  return (
    <Container>
      <div className='w-100 d-flex justify-content-between'>
        <div className='w-25 border'>
          Studio Realize
        </div>
        <div className='w-25 border'>
          Login
        </div>
      </div>
      <div className='w-100 h-75 d-flex justify-content-center'>
        <form className='w-50 border' action="">
          <div>
            <input
              className='rounded w-100'
              name='email'
              placeholder="Seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className='rounded w-100'
              name='password'
              placeholder="Sua Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="rounded" type="submit">Entrar</button>
          <GoogleOAuthProvider clientId={clientId}>
            <Google />
          </GoogleOAuthProvider>
      
        </form>
      </div>
    </Container>
  );
}