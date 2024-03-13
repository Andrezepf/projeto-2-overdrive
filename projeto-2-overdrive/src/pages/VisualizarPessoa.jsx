import React from 'react'

import './VisualizarPessoa.css'
import Message from '../components/Message'
import { Link } from 'react-router-dom'


const VisualizarPessoa = () => {
    return (
        <div id="edit-profile">
          <h2>Informações da pessoa: </h2>
            <Message color="danger" text="Mensagem de erro enviada!"/>
          <form>
            <div className="mb-3">
              <label className="form-label">ID:</label>
              <input type="text" className="form-control" value='1' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome:</label>
              <input type="text" className="form-control" value='João da Silva' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">CPF:</label>
              <input type="text" className="form-control" value='454.656.232-88' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" value='(19)3333-3333' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Usuário:</label>
              <input type="text" className="form-control" value='joao.silva' disabled/>
            </div>
            

              
            <label className="form-label">Situação:</label>
            <select class="form-select" aria-label="Default select example" disabled>
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
            <Link to="/pessoa/editarpessoa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Editar</button></Link>
            <Link to="/pessoa"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Excluir</button></Link>
            <Link to="/pessoa"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
          </form>
        </div>
    )
}

export default VisualizarPessoa