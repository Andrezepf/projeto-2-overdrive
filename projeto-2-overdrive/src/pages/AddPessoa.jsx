import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import validarCpf from 'validar-cpf'
import Swal from 'sweetalert2'


import './AddEmpresa.css'
import { useForm } from 'react-hook-form'

const AddPessoa = () => {
  const [empresas, setEmpresas] = useState([]);
  const { register, setFocus } = useForm();

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
    Swal.fire({
      title: "Pessoa cadastrada com sucesso!",
      text: "",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/pessoa")
  }

 

 
 const valCpf = (e) => {
  const cpf = e.target.value.replace(/\D/g, '');
  if (cpf.length === 11) {

    //console.log(cpf);
    const newcpf = validarCpf(cpf)
    
    if (newcpf) {
      //console.log("valido")
      setFocus('telefone')
    } else {
      //console.log("invalido")
      document.getElementById('cpf').value=''
      Swal.fire({
        icon: "error",
        title: "CPF inválido!",
        text: "Por favor, digite um CPF válido.",
      });
    }
  }
}

const handlePhone = (e) => {
  let input = e.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}


  return (
    <div id="order-form-container">
      <h2>Informações da pessoa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira o nome...' minLength={3} maxLength={255} required />
            <label className="form-label">Nome:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" id='cpf' name='cpf' data-input mask="000.000.000-00" placeholder='Insira o CPF...' onKeyUp={valCpf} minLength={14} maxLength={14} required/>
            <label className="form-label" htmlFor='cpf'>CPF:</label>
          </div>
          <div className="mb-3 form-floating">
            <input className="form-control shadow-none" onKeyUp={handlePhone} {...register("telefone")} name='telefone' id='telefone' placeholder='Insira o telefone...' minLength={14} maxLength={15} required />
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
            <option value="">- Sem vínculo com empresa -</option>
            {empresas.map((empresa) => (
              <option value={empresa.id} key={empresa.id}>{empresa.nomefantasia}</option>
              ))}

          </select>
              </div>
        </div>
              <button type="submit" className="btn btncor btnmenu">Criar</button>
        <Link to="/pessoa"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
      </form>
    </div>
  )
}

export default AddPessoa