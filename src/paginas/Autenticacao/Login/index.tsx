import { Container } from './styles';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiKey } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import { GiFairyWand } from "react-icons/gi";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import api from '../../../services/api';

const GOOGLE_CLIENT_ID = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const processarLogin = async (data: any) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id_usuario', response.data.id_usuario);
      localStorage.setItem('tipo_usuario', response.data.tipo_usuario);
      localStorage.setItem('nome', response.data.nome);
      localStorage.setItem('img_url', response.data.img_url);
      window.location.href = "/home";
    } catch (error) {
      alert('Ocorreu um erro ao processar a solicitação de login');
    }
  };

  const fazerLoginComGoogle = async (res: any) => {
    const data = res.profileObj;
    await processarLogin(data);
  };

  const fazerLogin = async (event: any) => {
    event.preventDefault();
    const data = { email, password };
    await processarLogin(data);
  };

  const onFailure = (err: any) => {
    console.log('failed', err);
  };

  return (
    <Container>
      <div className='w-100 d-flex justify-content-between'>
        <div className='h-50 d-flex justify-content-around align-self-center'>
          <div className='text-white' >Studio Realize</div>
          <GiFairyWand />
        </div>
        <div className='w-10 h-10 input d-flex justify-content-around'>
          <RiLoginBoxFill />
          <Link className="m-2" to="/registrar">
            Cadastrar Clitente
          </Link>
        </div>
      </div>
      <div className='w-100 h-75 d-flex justify-content-center'>
        <form onSubmit={fazerLogin}>
            <div className='input h-20'>
              <FaUserAlt />
              <input
                className='rounded w-100'
                id="email"
                name='email'
                type="email"
                placeholder="exemplo@exemplo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input h-20'>
                <HiKey />
              <input
                className='rounded w-100'
                id="password"
                name='password'
                type="password"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          <button className="rounded bg-dark h-20" type="submit">Entrar</button>
          <div className=''>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login com Google"
              onSuccess={fazerLoginComGoogle}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
        </form>
        </div>
    </Container>
  );
}

export default Login;