import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './styleNewBook.css';

function NewBook() {
  return (
    <div className="new-book">
      <div className="content">
        <section className="form">
          <h1>Adicionar Novo Livro</h1>
          <p>Entre com as informações do Livro e clique em Adicionar!</p>
          <Link className="back-link" to="/book">
            <FiArrowLeft size={16} color="#251fc5" />
            Home
          </Link>
        </section>
        <form>
          <input placeholder="Titulo" />
          <input placeholder="Autor" />
          <input type="date" />
          <input placeholder="Preço" />
          <button className="button" type="submit">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBook;
