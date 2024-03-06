import { Link } from "react-router-dom"

import './Pessoa.css'


const Pessoa = () => {
  return (
    <div>

        <h1>Pessoa</h1>
        <h3>Mostrar tabela de pessoas</h3>
        <table border="1">
          <tr>
              <td>ID</td>
              <td>Nome</td>
              <td>Status</td>
          </tr>
          <tr>
              <td>1</td>
              <td>João da Silva</td>
              <td>Inativo</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Maria Oliveira</td>
              <td>Ativo</td>
          </tr>
      </table>
        <Link to="/adicionarpessoa">Adicionar nova pessoa</Link>
        <Link to="/editarpessoa">Editar pessoa</Link>

    </div>
  )
}

export default Pessoa