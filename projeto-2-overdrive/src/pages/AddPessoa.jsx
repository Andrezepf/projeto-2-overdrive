import React from 'react'
import { Link } from 'react-router-dom'

const AddPessoa = () => {
  return (
    <div id="edit-profile">
          <h2>Informações da pessoa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome:</label>
              <input type="text" className="form-control" placeholder='Insira o nome...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CPF:</label>
              <input type="text" className="form-control" placeholder='Insira o CPF...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" placeholder='Insira o telefone...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Usuário:</label>
              <input type="text" className="form-control" placeholder='Insira o usuário...'/>
            </div>
            

              
            <label className="form-label">Situação:</label>
            <select class="form-select" aria-label="Default select example">
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <Link to="/pessoa"><button type="submit" className="btn btn-primary m-2">Criar</button></Link>
          <Link to="/pessoa"><button type="submit" className="btn btn-primary m-2">Voltar</button></Link>
          </form>
        </div>
  )
}

export default AddPessoa