import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Pessoa = () => {
  return (
    <div>
        <Navbar/>
        <h1>Pessoa</h1>
        <h3>Mostrar tabela de pessoas</h3>
        <Link to="/adicionarpessoa">Adicionar nova pessoa</Link>
    </div>
  )
}

export default Pessoa