import React from "react";
import "./styles.css";
import padlock from "../../assets/padlock.png";

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <form>
          <h1>Acesse sua conta</h1>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
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
