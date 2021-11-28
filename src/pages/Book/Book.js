import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

function Book() {
  return (
    <div className="book-container">
      <header>
        <span>
          Bem vindo, <strong>Alexandre</strong>!
        </span>
        <Link className="button" to="book/new">
          Novo Livro
        </Link>
        <button type="button">
          <FiPower size={18} color="#251FC5" />
        </button>
      </header>
      <h1>Registrar Livros</h1>
      <ul>
        <li>
          <strong>Titulo:</strong>
          <p>Padrões de Projeto</p>
          <strong>Autor:</strong>
          <p>Gang of Four</p>
          <strong>Preço:</strong>
          <p>R$ 150,00</p>
          <strong>Data de Lançamento:</strong>
          <p>28/11/2021</p>
          <button type="button">
              <FiEdit size={20} color="#251fc5" />
          </button>

          <button type="button">
              <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>

        <li>
          <strong>Titulo:</strong>
          <p>Padrões de Projeto</p>
          <strong>Autor:</strong>
          <p>Gang of Four</p>
          <strong>Preço:</strong>
          <p>R$ 150,00</p>
          <strong>Data de Lançamento:</strong>
          <p>28/11/2021</p>
          <button type="button">
              <FiEdit size={20} color="#251fc5" />
          </button>

          <button type="button">
              <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Book;
