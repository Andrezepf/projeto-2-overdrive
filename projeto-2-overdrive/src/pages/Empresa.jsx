import { Link } from "react-router-dom"


const Empresa = () => {
  return (
    <div>

        <h1>Empresa</h1>
        <h3>Mostrar tabela de empresas</h3>
        <Link to="/adicionarempresa">Adicionar nova empresa</Link>

    </div>
  )
}

export default Empresa