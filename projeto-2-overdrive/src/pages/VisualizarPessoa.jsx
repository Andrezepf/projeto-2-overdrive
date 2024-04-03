import React, { useEffect, useState } from 'react'

import './VisualizarPessoa.css'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { IMaskInput } from 'react-imask'


const VisualizarPessoa = () => {
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
  return (
      <div id="order-form-container">
        {/* <Message color="danger" text="Mensagem de erro enviada!" /> */}
        <h2>Informações da pessoa: </h2>
        <form id="address-form">
          <div className='row mb-3'>
            <div className="mb-3 form-floating">
              <input type="text" className="form-control shadow-none" value='1' disabled />
              <label className="form-label">ID:</label>
            </div>
            <div className="mb-3 form-floating">
              <input type="text" className="form-control shadow-none" value='João da Silva' disabled />
              <label className="form-label">Nome:</label>
            </div>
            <div className="mb-3 form-floating">
              <IMaskInput className="form-control shadow-none" mask="000.000.000-00" value='454.656.232-88' disabled />
              <label className="form-label">CPF:</label>
            </div>
            <div className="mb-3 form-floating">
              <IMaskInput className="form-control shadow-none" mask="(00) 00000-0000" value='(19) 99999-3333' disabled />
              <label className="form-label">Telefone:</label>
            </div>
            <div className="mb-3 form-floating">
              <input type="text" className="form-control shadow-none" value='joao.silva' disabled />
              <label className="form-label">Usuário:</label>
            </div>


            <div className="mb-3">

              <label className="form-label">Situação Cadastral:</label>
              <select className="form-select shadow-none" defaultValue="2" disabled>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Pendente</option>
              </select>
              <label className="form-label">Empresa:</label>
              <select className="form-select shadow-none" aria-label="Default select example" disabled>
                {empresas.map((empresa) => (
                  <option value={empresa.id} key={empresa.id}>{empresa.nomefantasia}</option>
                ))}

              </select>
            </div>
          </div>
          <Link to="/pessoa/editarpessoa/1"><button type="submit" className="btn btncor btnmenu">Editar</button></Link>
          <Link to="/pessoa"><button type="submit" className="btn btncor btnmenu" onClick={() => { if (window.confirm('Tem certeza que deseja excluir essa pessoa?')); }}>Excluir</button></Link>
          <Link to="/pessoa"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
        </form>
      </div>

  )
}

export default VisualizarPessoa