import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import './Pessoa.css'


const SearchP = () => {
  const [pessoas, setPessoas] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/pessoas", requestOptions)
      .then((response) => response.json())
      .then((result) => setPessoas(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/pessoa/search?q=${search}`)
    setSearch("")


  }


  return (
    <div>

      <h1>Pessoas</h1>
      <Message color="success" text="Mensagem enviada com sucesso!" />
      <span className="spanlista">Lista de pessoas cadastradas: </span>
      <Link to="/pessoa/adicionarpessoa"><button type="submit" className="btn btncor m-2 add mb-3">Adicionar pessoa</button></Link>
      <form onSubmit={handleSubmit}>
        <input className="input-search" type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit" className="btn btncor m-2 mb-3">Buscar</button>
      </form>


      <div className="tabela">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Empresa</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          {pessoas.map((pessoa) => (
            <tbody  key={pessoa.id}>
              <tr>
                <td scope="row">{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.empresa}</td>
                <td>{pessoa.situacao}</td>
                <td><Link to={`/pessoa/visualizarpessoa/${pessoa.id}`} ><button type="button" className="btn btncor">Visualizar</button></Link></td>
              </tr>

            </tbody>
          ))}
        </table>
      </div>

    </div>
  )
}

export default SearchP