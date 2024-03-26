import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import validarCpf from 'validar-cpf'
import { useForm } from 'react-hook-form'

import './AddEmpresa.css'

const AddPessoa = () => {
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
    navigate("/pessoa")
  }

 

  const { register, setValue, setFocus } = useForm();
 const valCpf = (e) => {
  const cpf = e.target.value.replace(/\D/g, '');
  if (cpf.length === 11) {

    console.log(cpf);
    const newcpf = validarCpf(cpf)
    
    if (newcpf) {
      console.log("valido")
    } else {
      console.log("invalido")
      window.alert("CPF INVÁLIDO! Favor inserir um cpf válido.")
      document.getElementById('cpf').value=''
    }
  }
}


  return (
    <div id="order-form-container" className="my-md-4 px-md-0">
      <h2>Informações da pessoa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira o nome...' minLength={3} maxLength={255} required />
            <label className="form-label">Nome:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" id='cpf' name='cpf' data-input {...register("cpf")} mask="000.000.000-00" placeholder='Insira o CPF...' onKeyUp={valCpf} minLength={14} maxLength={14} required/>
            <label className="form-label" htmlFor='cpf'>CPF:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="(00) 00000-0000" placeholder='Insira o telefone...' minLength={14} maxLength={15} required />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira o usuário...' minLength={5} maxLength={20} required />
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
              <button type="submit" className="btn btncor m-2 mt-1 btn-lg">Criar</button>
        <Link to="/pessoa"><button type="submit" className="btn btncor m-2 mt-1 btn-lg">Voltar</button></Link>
      </form>
    </div>
  )
}

export default AddPessoa