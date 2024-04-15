import { Link } from "react-router-dom"
import React, { useMemo } from "react";
import './Pessoa.css'
import Tabela from "../components/Tabela";
import mData from '../dbP.json'
import { BsEye } from "react-icons/bs";


const Pessoa = () => {

  const data = useMemo(() => mData, [])

  const columns = [
    {
      accessorKey: 'id',
      header: "ID",
      //cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'nome',
      header: "Nome",
    },
    {
      accessorKey: 'cpf',
      header: "CPF",
    },
    {
      accessorKey: 'empresa',
      header: "Empresa",
    },
    {
      accessorKey: 'situacao',
      header: "Situação",
    },
    {
      header: "Visualizar",
      cell: <Link to={`/pessoa/visualizarpessoa/1`} ><button type="button" className="btn btncor"><BsEye /></button></Link>
    }
  ]

  return (
    <div className="divTabela">
      <h1>Pessoas</h1>
      <span className="spanlista">Lista de pessoas cadastradas: </span>
      <Link to="/pessoa/adicionarpessoa"><button type="submit" className="btn btncor add">Adicionar pessoa</button></Link>
      <Tabela data={data} columns={columns} />
    </div>
  )
}

export default Pessoa