import React from 'react'
import { IMaskInput } from 'react-imask'
import { Link } from 'react-router-dom'

const AddEmpresa = () => {
  return (
    <div id="edit-profile">
          <h2>Informações da empresa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome Empresarial:</label>
              <input type="text" className="form-control" placeholder='Insira o nome empresarial...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nome Fantasia:</label>
              <input type="text" className="form-control" placeholder='Insira o nome fantasia...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CNPJ:</label>
              <IMaskInput className="form-control" mask="000.000.000/0000-00" placeholder='Insira o CNPJ...' />
            </div>
            <div className="mb-3">
              <label className="form-label">Data de abertura:</label>
              <IMaskInput className="form-control" mask="00/00/0000" placeholder='Insira a data de abertura da empresa...' />
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço:</label>
              <input type="text" className="form-control" placeholder='Insira o endereço...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <IMaskInput className="form-control" mask="(00) 00000-0000" placeholder='Insira o telefone...' />
            </div>
            <div className="mb-3">
              <label className="form-label">Natureza jurídica:</label>
              <input type="text" className="form-control" placeholder='Insira a natureza jurídica da empresa...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Atividades Econômicas:</label>
              <input type="text" className="form-control" placeholder='Insira as ativadades econômicas...'/>
            </div>
            <div className="mb-3">
              <label className="form-label">Capital:</label>
              <IMaskInput className="form-control" mask={Number} placeholder='Insira o capital...' />
            </div>
            

              
            <label className="form-label">Situação cadastral:</label>
            <select className="form-select" aria-label="Default select example">
            <option value="1">Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <Link to="/empresa"><button type="submit" className="btn btncor m-2">Criar</button></Link>
          <Link to="/empresa"><button type="submit" className="btn btncor m-2">Voltar</button></Link>
          </form>
        </div>
  )
}

export default AddEmpresa