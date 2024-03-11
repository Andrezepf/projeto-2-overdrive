import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Message from "../components/Message";


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

        <h1>Empresa</h1>
        <Message color="success" text="Mensagem de sucesso!"/>
        <h3>Mostrar tabela de empresas</h3>
          <Link to="/adicionarempresa"><button type="submit" className="btn btn-primary m-2">Adicionar empresa</button></Link>
        <div className="tabela">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Status</th>
              <th scope="col">Visualizar</th>
            </tr>
          </thead>
          {empresas.map((empresa) => (
          <tbody>
            <tr>
              <td scope="row">{empresa.id}</td>
              <td>{empresa.nomefantasia}</td>
              <td>{empresa.cnpj}</td>
              <td>{empresa.situacao}</td>
              <td><Link to={`/visualizarempresa/${empresa.id}`}><button type="button" className="btn btn-light">Light</button></Link></td>
            </tr>
          </tbody>
          ))}
        </table>
        </div>

    </div>
  )
}

export default Empresa