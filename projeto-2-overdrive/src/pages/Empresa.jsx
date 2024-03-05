import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Empresa = () => {
  return (
    <div>
        <Navbar/>
        <h1>Empresa</h1>
        <h3>Mostrar tabela de empresas</h3>
        <Link to="/adicionarempresa">Adicionar nova empresa</Link>
    </div>
  )
}

export default Empresa