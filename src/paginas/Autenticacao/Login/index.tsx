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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const clientId = "959861611664-n7ql4k5hf128e48qbsspdhu0vdkd3sar.apps.googleusercontent.com";

  const [profile, setProfile] = useState(Object);
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
    let url: any = "/login";
    
    try {
      api.post(url, res.profileObj).then((response) => ( 
        localStorage.setItem('token', response.data.token),
        localStorage.setItem('id_usuario', response.data.id_usuario),
        localStorage.setItem('tipo_usuario', response.data.tipo_usuario),
        localStorage.setItem('nome', response.data.nome)
        ));
      window.location.href = "/home";
    } catch (err) {
      alert('Usuário e/ou senha inválidos.');
    }
  };

  function efetuarLogin(){
    let url: any = "/login";
    
    try {
      api.post(url, { email, password }).then((response) => ( 
        localStorage.setItem('token', response.data.token),
        localStorage.setItem('id_usuario', response.data.id_usuario),
        localStorage.setItem('tipo_usuario', response.data.tipo_usuario),
        localStorage.setItem('nome', response.data.nome)
        ));
      window.location.href = "/home";
    } catch (err) {
      alert('Usuário e/ou senha inválidos.');
    }

  };

  const onFailure = (err: any) => {
    console.log('failed', err);
  };

    const logOut = () => {
    setProfile(null);
  };
  return (
    <Container>
      <div className='w-100 d-flex justify-content-between'>
        <div className='h-50 d-flex justify-content-around align-self-center'>
          <> Studio Realize</>
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
        <form >
          <div className='input h-20'>
            <FaUserAlt />
            <input
              className='rounded w-100'
              name='email'
              placeholder="Seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input h-20'>
            <HiKey />
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
          <div className='border' onClick={efetuarLogin} >entrar</div>
          <button className="rounded bg-dark h-20" type="submit">Entrar</button>

          <div className=''>
            {profile ? (
              <div>
                <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
              </div>
            ) : (
              <GoogleLogin
                clientId={clientId}
                buttonText="Login com Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            )}
          </div>
        </form>
      </div>
    </Container>
  );
}