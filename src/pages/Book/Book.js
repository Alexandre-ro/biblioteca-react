import React, {useState, useEffect} from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/Api";

function Book() {
  
  const [books, setBooks] = useState([]);
  const userName          = localStorage.getItem('userName');
  const accessToken       = localStorage.getItem('accessToken');
  const history           = useHistory();
  
  useEffect(() =>{
    api.get('api/Book/v1/asc/20/1', {
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response =>{
        setBooks(response.data.list)
    });
  }, [accessToken]);

  async function deleteBook(id){
    try{
      await api.delete(`api/Book/v1/${id}`,{
        headers:{
          Authorization: `Bearer ${accessToken}`
        }       
      });
      setBooks(books.filter(book => book.id !== id));  
    }catch(err){
        alert('Ocorreu uma falha na tentativa de remover o Livro.');
    }
  }

  async function logout(){
    try{  
      await api.get('api/auth/v1/revoke', {
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
      });
     localStorage.clear();
     history.push('/');   
    }catch(err){
      alert('Ocorreu uma falha ao deslogar..');
    }
  }

  async function editBook(id){
    try{
      history.push(`book/novo/${id}`);
    }catch(err){
      alert('ocorreu um erro ao editar o Livro.');
    }
  }
  
  return (
    <div className="book-container">
      <header>
        <span>
          Bem vindo, <strong>{userName.toUpperCase()}</strong>!
        </span>
        <Link className="button" to="/book/novo/0"> Novo Livro </Link>
        <button onClick= {logout} type="button"> <FiPower size={18} color="#251FC5" />  </button>
      </header>
      <h1>Registrar Livros</h1>
      <ul>
        {books.map(book =>(
          <li key={book.id}>
          <strong>Titulo:</strong>
          <p>{book.title}</p>
          <strong>Autor:</strong>
          <p>{book.author}</p>
          <strong>Preço:</strong>
          <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(book.price)}</p>
          <strong>Data de Lançamento:</strong>
          <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
          <button type="button" onClick={() => editBook(book.id)}> <FiEdit size={20} color="#251fc5" /></button>
          <button type="button" onClick={() => deleteBook(book.id)}> <FiTrash2 size={20} color="#251fc5" /></button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
