import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
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
  return (
    <div>

        <h1>Empresas</h1>
        <Message color="success" text="Mensagem enviada com sucesso!"/>
        <span className="spanlista">Lista de empresas cadastradas: </span>
          <Link to="/empresa/adicionarempresa"><button type="submit" className="btn btncor m-2 add mb-3">Adicionar empresa</button></Link>
        <div className="tabela">
        <table className="table table-hover">
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
          <tbody>
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