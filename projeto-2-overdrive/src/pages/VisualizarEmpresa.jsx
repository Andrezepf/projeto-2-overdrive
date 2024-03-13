import React from 'react'

import Message from '../components/Message'
import { Link } from 'react-router-dom'


const VisualizarEmpresa = () => {
    return (
        <div id="edit-profile">
          <h2>Informações da empresa: </h2>
            <Message color="danger" text="Mensagem de erro enviada!"/>
            <form>
            <div className="mb-3">
              <label className="form-label">ID:</label>
              <input type="text" className="form-control" value='1' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome Fantasia:</label>
              <input type="text" className="form-control" value='Test Company' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome Empresarial:</label>
              <input type="text" className="form-control" value='Empresa de teste ltda' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">CNPJ:</label>
              <input type="text" className="form-control" value='333.444.555/0001-66' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Data de abertura:</label>
              <input type="text" className="form-control" value='13/12/2001' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço:</label>
              <input type="text" className="form-control" value='Rua quinze de maio, 5000' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" value='(19)3333-3333' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Natureza jurídica:</label>
              <input type="text" className="form-control" value='Prestação de serviço' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Atividades Econômicas:</label>
              <input type="text" className="form-control" value='Testes de produtos' disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label">Capital:</label>
              <input type="text" className="form-control" value='350.000,00' disabled/>
            </div>
            

              
            <label className="form-label">Situação cadastral:</label>
            <select class="form-select" aria-label="Default select example" disabled>
            <option value="1" selected>Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <Link to="/empresa/editarempresa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Editar</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Excluir</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
          </form>
        </div>
    )
}

export default VisualizarEmpresa