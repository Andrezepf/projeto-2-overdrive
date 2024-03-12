import React from 'react'
import { Link } from 'react-router-dom'



const EditarPessoa = () => {
    return (
        <div id="edit-profile">
          <h2>Informações da pessoa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome:</label>
              <input type="text" className="form-control" placeholder='João da Silva'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CPF:</label>
              <input type="text" className="form-control" placeholder='454.656.232-88'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" placeholder='33333333'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Usuário:</label>
              <input type="text" className="form-control" placeholder='joao.silva'/>
            </div>
            

              
            <label className="form-label">Situação:</label>
            <select class="form-select" aria-label="Default select example">
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <Link to="/visualizarpessoa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Salvar</button></Link>
          <Link to="/visualizarpessoa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
          </form>
        </div>
    )
}

export default EditarPessoa