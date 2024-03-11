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

        <h1>Pessoa</h1>
        <Message color="success" text="Mensagem de sucesso!"/>
        <h3>Mostrar tabela de pessoas</h3>
            <Link to="/adicionarpessoa"><button type="submit" className="btn btn-primary m-2">Adicionar pessoa</button></Link>


        <div className="tabela">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Status</th>
                <th scope="col">Visualizar</th>
              </tr>
            </thead>
        {pessoas.map((pessoa) => (
            <tbody>
              <tr>
                <td scope="row">{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.situacao}</td>
                <td><Link to={`/visualizarpessoa/${pessoa.id}`} ><button type="button" className="btn btn-light">Light</button></Link></td>
              </tr>
              
            </tbody>
          ))}
          </table>
        </div>
        

    </div>
  )
}

export default Pessoa