import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Message from "../components/Message";

import './Pessoa.css'


const Empresa = () => {
  const [empresas, setEmpresas] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/empresas", requestOptions)
      .then((response) => response.json())
      .then((result) => setEmpresas(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);


  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/empresa/search?q=${search}`)
    setSearch("")


  }
  return (
    <div>

        <h1>Empresas</h1>
        <Message color="success" text="Mensagem enviada com sucesso!"/>
        <span className="spanlista">Lista de empresas cadastradas: </span>
          <Link to="/empresa/adicionarempresa"><button type="submit" className="btn btncor m-2 add mb-3">Adicionar empresa</button></Link>
          <form onSubmit={handleSubmit}>
            <input className="input-search" type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit" className="btn btncor m-2 mb-3">Buscar</button>
          </form>
        <div className="tabela">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          {empresas.map((empresa) => (
          <tbody key={empresa.id}>
            <tr>
              <td scope="row">{empresa.id}</td>
              <td>{empresa.nomefantasia}</td>
              <td>{empresa.cnpj}</td>
              <td>{empresa.situacao}</td>
              <td><Link to={`/empresa/visualizarempresa/${empresa.id}`}><button type="button" className="btn btncor">Visualizar</button></Link></td>
            </tr>
          </tbody>
          ))}
        </table>
        </div>
            
    </div>
  )
}

export default Empresa