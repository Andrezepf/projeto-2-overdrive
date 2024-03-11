import React from 'react'

import Message from '../components/Message'
import { Link } from 'react-router-dom'


const VisualizarEmpresa = () => {
    return (
        <div id="edit-profile">
          <h2>Informações da empresa: </h2>
            <Message color="success" text="Mensagem de sucesso!"/>
            <form>
            <div className="mb-3">
              <label className="form-label">ID:</label>
              <input type="text" className="form-control" value='1' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome Empresarial:</label>
              <input type="text" className="form-control" placeholder='Insira o nome empresarial...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome Fantasia:</label>
              <input type="text" className="form-control" placeholder='Insira o nome fantasia...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">CNPJ:</label>
              <input type="text" className="form-control" placeholder='Insira o CPF...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Data de abertura:</label>
              <input type="text" className="form-control" placeholder='Insira a data de abertura da empresa...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço:</label>
              <input type="text" className="form-control" placeholder='Insira o endereço...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" placeholder='Insira o telefone...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Natureza jurídica:</label>
              <input type="text" className="form-control" placeholder='Insira a natureza jurídica da empresa...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Atividades Econômicas:</label>
              <input type="text" className="form-control" placeholder='Insira as ativadades econômicas...' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Capital:</label>
              <input type="text" className="form-control" placeholder='Insira o Capital...' disabled/>
            </div>
            

              
            <label className="form-label">Situação cadastral:</label>
            <select class="form-select" aria-label="Default select example" disabled>
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <Link to="/editarempresa/1"><button type="submit" className="btn btn-primary m-2">Editar</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btn-primary m-2">Excluir</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btn-primary m-2">Voltar</button></Link>
          </form>
        </div>
    )
}

export default VisualizarEmpresa