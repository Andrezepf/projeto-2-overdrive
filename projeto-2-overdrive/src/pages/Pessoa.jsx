import { Link } from "react-router-dom"

import './Pessoa.css'


const Pessoa = () => {
  return (
    <div>

        <h1>Pessoa</h1>
        <h3>Mostrar tabela de pessoas</h3>

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
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>João da Silva</td>
              <td>454.656.232-88</td>
              <td>Inativo</td>
              <td><Link to="/editarpessoa"><button type="button" className="btn btn-light">Light</button></Link></td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Maria Oliveira</td>
              <td>454.656.232-89</td>
              <td>Ativo</td>
              <td><Link to="/editarpessoa"><button type="button" className="btn btn-light">Light</button></Link></td>
            </tr>
          </tbody>
        </table>
        </div>
        <Link to="/adicionarpessoa">Adicionar nova pessoa</Link>
        <Link to="/editarpessoa">Editar pessoa</Link>

    </div>
  )
}

export default Pessoa