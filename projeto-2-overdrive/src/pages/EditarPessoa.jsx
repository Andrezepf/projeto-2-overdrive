import React, { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask';
import { Link, useNavigate } from 'react-router-dom'



const EditarPessoa = () => {
  const [empresas, setEmpresas] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/empresas", requestOptions)
      .then((response) => response.json())
      .then((result) => setEmpresas(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/pessoa/visualizarpessoa/1")
  }

    return (
        <div id="order-form-container" className="my-md-4 px-md-0">
      <h2>Informações da pessoa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='João da Silva' minLength={3} maxLength={255} required />
            <label className="form-label">Nome:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="000.000.000-00" defaultValue='454.656.232-88' minLength={14} maxLength={14} required/>
            <label className="form-label">CPF:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="(00) 00000-0000" defaultValue='(19) 3333-3333' minLength={14} maxLength={15} required />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='joao.silva' minLength={5} maxLength={20} required />
            <label className="form-label">Usuário:</label>
          </div>


          <div className="mb-3">

          <label className="form-label">Situação Cadastral:</label>
          <select className="form-select shadow-none" defaultValue="2">
            <option value="1">Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          <label className="form-label">Empresa:</label>
          <select className="form-select shadow-none" aria-label="Default select example">
            {empresas.map((empresa) => (
              <option value={empresa.id} key={empresa.id}>{empresa.nomefantasia}</option>
              ))}

          </select>
              </div>
        </div>
              <button type="submit" className="btn btncor m-2 mt-1 btn-lg">Salvar</button>
        <Link to="/pessoa/visualizarpessoa/1"><button type="submit" className="btn btncor m-2 mt-1 btn-lg">Voltar</button></Link>
      </form>
    </div>

    )
}

export default EditarPessoa