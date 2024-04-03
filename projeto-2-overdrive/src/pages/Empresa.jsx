import { useMemo } from "react";
import { Link } from "react-router-dom"
import mData from '../dbE.json'
import './Pessoa.css'
import Tabela from "../components/Tabela";
import { BsEye } from "react-icons/bs";


const Empresa = () => {

  const data = useMemo(() => mData, [])

  const columns = [
    {
      accessorKey: 'id',
      header: "ID",
      //cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'nomefantasia',
      header: "Nome",
    },
    {
      accessorKey: 'cnpj',
      header: "CNPJ",
    },
    {
      accessorKey: 'telefone',
      header: "Telefone",
    },
    {
      accessorKey: 'situacao',
      header: "Situação",
    },
    {
      header: "Visualizar",
      cell: <Link to={`/empresa/visualizarempresa/1`} ><button type="button" className="btn btncor"><BsEye/></button></Link>
    }
  ]

  return (
    <div className="divTabela">
        <h1>Empresas</h1>
        <span className="spanlista">Lista de empresas cadastradas: </span>
          <Link to="/empresa/adicionarempresa"><button type="submit" className="btn btncor add">Adicionar empresa</button></Link>
        <Tabela data={data} columns={columns}/>  
    </div>
  )
}

export default Empresa