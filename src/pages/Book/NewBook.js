import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './styleNewBook.css';
import api from "../../services/Api";

function NewBook() {
  const[title, setTitle]            = useState('');
  const[author,setAuthor]           = useState('');
  const[launchDate, setlaunchDate]  = useState('');
  const[price, setPrice]            = useState('');
  const history                     = useHistory();

  async function Adicionar(e){
    e.preventDefault();

    const data = {
        title,
        author,
        launchDate,
        price
    };

    const accessToken = localStorage.getItem('accessToken');
   
    try{
        await api.post('api/Book/v1', data, {
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
    }catch(err){
        alert('Ocorreu um erro ao salvar o livro!');
    }

    history.push('/book');
  }
  
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
        <form onSubmit={Adicionar}>
          <input placeholder="Titulo" value={title} onChange= {e => setTitle(e.target.value)} />
          <input placeholder="Autor" value={author} onChange= {e => setAuthor(e.target.value)} />
          <input type="date" value={launchDate} onChange = {e => setlaunchDate(e.target.value)} />
          <input placeholder="Preco" value={price} onChange = {e => setPrice(e.target.value)} />
          <button className="button" type="submit">
            Adicionar
          </button>
        </form>
      </div>
    </div> 
  );
}

export default NewBook;
