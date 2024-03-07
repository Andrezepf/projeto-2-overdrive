import { Link } from "react-router-dom"


const Empresa = () => {
  return (
    <div>

        <h1>Empresa</h1>
        <h3>Mostrar tabela de empresas</h3>
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
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Empresa teste</td>
              <td>454.656.232-88</td>
              <td>Inativo</td>
              <td><Link to="/editarpessoa"><button type="button" className="btn btn-light">Light</button></Link></td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Teste de Empresa</td>
              <td>454.656.232-89</td>
              <td>Ativo</td>
              <td><Link to="/editarpessoa"><button type="button" className="btn btn-light">Light</button></Link></td>
            </tr>
          </tbody>
        </table>
        </div>
        <Link to="/adicionarempresa">Adicionar nova empresa</Link>

    </div>
  )
}

export default Empresa