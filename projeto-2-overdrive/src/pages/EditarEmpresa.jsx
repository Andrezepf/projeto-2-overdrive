import React from 'react'
import { IMaskInput } from 'react-imask'
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
              <IMaskInput className="form-control" mask="000.000.000/0000-00" placeholder='333.444.555/0001-66' />
            </div>
            <div className="mb-3">
              <label className="form-label">Data de abertura:</label>
              <IMaskInput className="form-control" mask="00/00/0000" placeholder='13/12/2001' />
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço:</label>
              <input type="text" className="form-control" placeholder='Rua quinze de maio, 5000'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <IMaskInput className="form-control" mask="(00) 00000-0000" placeholder='(19) 3333-3333' />
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
              <input type="text" className="form-control" placeholder='350000,00'/>
              <IMaskInput className="form-control" mask={Number} placeholder='350000,00' />
            </div>
            

              
            <label className="form-label">Situação cadastral:</label>
            <select className="form-select" aria-label="Default select example">
            <option placeholder="1">Ativo</option>
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