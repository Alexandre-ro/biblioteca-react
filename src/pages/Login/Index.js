import {React, useState} from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import padlock from "../../assets/padlock.png";
import api from "../../services/Api";

function Login() {

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const history               = useHistory();

async function logar(e){
  e.preventDefault();

  const data = {
    userName,
    password
  };

    try{
      const response = await api.post('api/auth/v1/signin', data);
      console.log('dsd'+response);

      localStorage.setItem('userName', userName);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      //Em caso de sucesso redireciona para a página de livros
      history.push('/book');

    }catch(error){  
      alert('A tentativa de logar falhou, tente novamente!');
    }
};

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={logar}>
          <h1>Acesse sua conta</h1>
          <input type="text" placeholder="Usuário" value={userName} onChange={e => setUserName(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="button" type="submit">
            Logar
          </button>
        </form>
      </section>

      <img src={padlock} alt="Login" />
    </div>
  );
}

export default Login;
