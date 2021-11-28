import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";


function Login() {
  return <div className="login-container">
      <section className="form">
        <img src={logo} alt="Logo" />
            <form>
                <h1>Acese sua conta</h1>
                <input type="text" placeholder ="Usuário" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Logar</button>

            </form>
          </section>    

          <img src={padlock} alt="Login" /> 

  </div>;
}

export default Login;
