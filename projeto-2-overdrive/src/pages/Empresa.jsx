import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Message from "../components/Message";
import mData from '../dbE.json'

import './Pessoa.css'
import Tabela2 from "../components/Tabela2";
import { BsEye } from "react-icons/bs";


const Empresa = () => {

  const data = useMemo(() => mData, [])
  //const [data, setData] = useState(mData)

  const columns = [
    {
      accessorKey: 'id',
      header: "ID",
      //cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'nomefantasia',
      header: "Nome",
      //cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'cnpj',
      header: "CNPJ",
      //cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: 'telefone',
      header: "Telefone",
      //cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: 'situacao',
      header: "Situação",
      //cell: (props) => <p>{props.getValue()}</p>
    },
    {
      //accessorKey: 'id',
      header: "Visualizar",
      cell: <Link to={`/empresa/visualizarempresa/1`} ><button type="button" className="btn btncor"><BsEye/></button></Link>
    }
  ]




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
        {/* <Message color="success" text="Mensagem enviada com sucesso!"/> */}
        <span className="spanlista">Lista de empresas cadastradas: </span>
          <Link to="/empresa/adicionarempresa"><button type="submit" className="btn btncor add mt-4">Adicionar empresa</button></Link>
          {/* <form onSubmit={handleSubmit}>
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
        </div> */}
        <Tabela2 data={data} columns={columns}/>  
    </div>
  )
}

export default Empresa