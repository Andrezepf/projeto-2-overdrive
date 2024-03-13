import React from 'react'
import { Link } from 'react-router-dom'



const EditarEmpresa = () => {
    return (
        <div id="edit-profile">
          <h2>Informações da empresa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome Fantasia:</label>
              <input type="text" className="form-control" placeholder='Test Company'/>
            </div>
          <div className="mb-3">
              <label className="form-label">Nome Empresarial:</label>
              <input type="text" className="form-control" placeholder='Empresa de teste ltda'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CNPJ:</label>
              <input type="text" className="form-control" placeholder='333.444.555/0001-66'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Data de abertura:</label>
              <input type="text" className="form-control" placeholder='13/12/2001'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço:</label>
              <input type="text" className="form-control" placeholder='Rua quinze de maio, 5000'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <input type="text" className="form-control" placeholder='(19)3333-3333'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Natureza jurídica:</label>
              <input type="text" className="form-control" placeholder='Prestação de serviço'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Atividades Econômicas:</label>
              <input type="text" className="form-control" placeholder='Testes de produtos'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Capital:</label>
              <input type="text" className="form-control" placeholder='350.000,00'/>
            </div>
            

              
            <label className="form-label">Situação cadastral:</label>
            <select class="form-select" aria-label="Default select example">
            <option placeholder="1" selected>Ativo</option>
            <option placeholder="2">Inativo</option>
            <option placeholder="3">Pendente</option>
          </select>
          <Link to="/empresa/visualizarempresa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Salvar</button></Link>
          <Link to="/empresa/visualizarempresa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
          </form>
        </div>
    )
}

export default EditarEmpresa