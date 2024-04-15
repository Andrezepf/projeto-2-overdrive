import React, { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask';
import { Link, useNavigate } from 'react-router-dom'
import validarCpf from 'validar-cpf';
import Swal from 'sweetalert2'
import mData from '../dbE.json'



const EditarPessoa = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    setEmpresas(mData);
  }, []);



  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Pessoa atualizada com sucesso!",
      text: "",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/pessoa/visualizarpessoa/1")
  }


  const valCpf = (e) => {
    const cpf = e.target.value.replace(/\D/g, '');
    if (cpf.length === 11) {

      //console.log(cpf);
      const newcpf = validarCpf(cpf)

      if (newcpf) {
        //console.log("valido")
      } else {
        //console.log("invalido")
        document.getElementById('cpf').value = ''
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
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }

  return (
    <div id="order-form-container">
      <h2>Informações da pessoa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='João da Silva' minLength={3} maxLength={255} required />
            <label className="form-label">Nome:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="000.000.000-00" name='cpf' id='cpf' defaultValue='454.656.232-88' onKeyUp={valCpf} minLength={14} maxLength={14} required />
            <label className="form-label">CPF:</label>
          </div>
          <div className="mb-3 form-floating">
            <input className="form-control shadow-none" onKeyUp={handlePhone} defaultValue='(19) 3333-3333' minLength={14} maxLength={15} required />
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
              <option value="">- Sem vínculo com empresa -</option>
              {empresas.map((empresa) => (
                empresa.situacao != 'Inativo' && <option value={empresa.id} key={empresa.id}>{empresa.nomefantasia}</option>
              ))}

            </select>
          </div>
        </div>
        <button type="submit" className="btn btncor btnmenu">Salvar</button>
        <Link to="/pessoa/visualizarpessoa/1"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
      </form>
    </div>

  )
}

export default EditarPessoa