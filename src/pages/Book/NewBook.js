import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './styleNewBook.css';
import api from "../../services/Api";

function NewBook() {
  const[title, setTitle]            = useState('');
  const[author,setAuthor]           = useState('');
  const[launchDate, setlaunchDate]  = useState('');
  const[price, setPrice]            = useState('');
  const history                     = useHistory();
  const {bookId}                    = useParams();
  const [id, setId]                 = useState(null);

  const accessToken = localStorage.getItem('accessToken');

  const authorization = {
    headers:{
      Authorization: `Bearer ${accessToken}`
    }
  };
  
  useEffect(() =>{   
    if(bookId === '0') return;
      else loadBook();
  }, [bookId]);

  async function loadBook(){
    try{
      const response = await api.get(`api/book/v1/${bookId}`, authorization)
      let dataAjustada = response.data.launchDate.split("T", 10)[0];
       
      setId(response.data.id);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPrice(response.data.price);
      setlaunchDate(dataAjustada);
    }catch(err){
      alert('Erro ao recuperar Livro.');
      history.push('/books');
    }
  }

  async function SaveOrUpdate(e){
    e.preventDefault();

    const data = {
        title,
        author,
        launchDate,
        price
    };

    try{
        if (bookId === "0") {
          await api.post("api/Book/v1", data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        }else{
          data.id = id;
          await api.put("api/Book/v1", data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        }
       
    }catch(err){
        alert('Ocorreu um erro ao salvar o livro!');
    }

    history.push('/book');
  }
  
  return (
    <div className="new-book">
      <div className="content">
        <section className="form">
          <h1>{bookId === '0' ? 'Adicionar Livro' : 'Atualizar Livro'}</h1>
          <p>Entre com as informações do Livro e clique em {bookId === '0' ? `Adicionar` : `Atualizar`}</p>
          <Link className="back-link" to="/book">
            <FiArrowLeft size={16} color="#251fc5" />
            Home
          </Link>
        </section>
        <form onSubmit={SaveOrUpdate}>
          <input placeholder="Titulo" value={title} onChange= {e => setTitle(e.target.value)} />
          <input placeholder="Autor" value={author} onChange= {e => setAuthor(e.target.value)} />
          <input type="date" value={launchDate} onChange = {e => setlaunchDate(e.target.value)} />
          <input placeholder="Preco" value={price} onChange = {e => setPrice(e.target.value)} />
          <button className="button" type="submit">
           {bookId === '0' ? 'Adicionar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </div> 
  );
}

export default NewBook;
