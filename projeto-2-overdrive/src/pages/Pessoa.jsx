import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import './Pessoa.css'
import Message from "../components/Message";


const Pessoa = () => {
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
  return (
    <div>

        <h1>Pessoas</h1>
        <Message color="success" text="Mensagem enviada com sucesso!"/>
        <span className="spanlista">Lista de pessoas cadastradas: </span>
            <Link to="/adicionarpessoa"><button type="submit" className="btn btncor m-2 add mb-3">Adicionar pessoa</button></Link>


        <div className="tabela">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
        {pessoas.map((pessoa) => (
            <tbody>
              <tr>
                <td scope="row">{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.situacao}</td>
                <td><Link to={`/visualizarpessoa/${pessoa.id}`} ><button type="button" className="btn btncor">Visualizar</button></Link></td>
              </tr>
              
            </tbody>
          ))}
          </table>
        </div>
        

    </div>
  )
}

export default Pessoa