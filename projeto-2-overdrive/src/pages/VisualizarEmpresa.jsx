import React from 'react'

import Message from '../components/Message'
import { Link, useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import Swal from 'sweetalert2'


const VisualizarEmpresa = () => {

  const navigate = useNavigate()
  
  const handleDelete = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Excluir essa empresa?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#a6a6a6",
      confirmButtonText: "Excluir!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Você excluiu a empresa com sucesso.",
          text: "",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/empresa")
      }
    });
}

    return (

      <div id="order-form-container">
      {/* <Message color="danger" text="Mensagem de erro enviada!"/> */}
      <h2>Informações da empresa: </h2>
      <form id="address-form">
        <div className="row divBot">
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" value='1' disabled />
            <label className="form-label">ID:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" value='Empresa de teste ltda' disabled />
            <label className="form-label">Nome Empresarial:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" value='Test Company' disabled />
            <label htmlFor='nomefantasia'>Nome Fantasia:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="000.000.000/0000-00" value='333.444.555/0001-66' disabled />
            <label htmlFor="cnpj">CNPJ:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input type='date' className="form-control" value='2001-12-13' disabled />
            <label className="form-label">Data de abertura:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput
              mask="00000-000"
              type="text"
              className="form-control shadow-none"
              id="cep"
              name="cep"
              value='90670-140'
              disabled
            />
            <label htmlFor="cep">CEP:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              
              type="text"
              className="form-control shadow-none"
              id="address"
              name="address"
              value="Rua Chile"
              disabled
              
            />
            <label htmlFor="address" >Rua</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
             
              type="text"
              className="form-control shadow-none"
              id="number"
              name="number"
              value="50"
              disabled
            />
            <label htmlFor="number">Número da residência:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              type="text"
              className="form-control shadow-none"
              id="complement"
              name="complement"
              value="sala 421"
              disabled
            />
            <label htmlFor="complement">Complemento (opcional):</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              
              type="text"
              className="form-control shadow-none"
              id="neighborhood"
              name="neighborhood"
              value="Jardim Botânico"
              disabled
            />
            <label htmlFor="neighborhood">Bairro</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              
              type="text"
              className="form-control shadow-none"
              id="city"
              name="city"
              value="Porto Alegre"
              disabled
            />
            <label htmlFor="city">Cidade</label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <select
              defaultValue="RS"
              className="form-select shadow-none"

              disabled
            >
              <option>Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="(00) 00000-0000" value='(19) 99999-3333' disabled />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input className="form-control shadow-none" value='R$ 350.000,00' disabled />
            <label className="form-label">Capital:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input type="text" className="form-control shadow-none" value='5684-7/02' disabled />
            <label className="form-label">CNAE:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" value='Prestação de serviço' disabled />
            <label className="form-label">Natureza jurídica:</label>
          </div>


          <div className="mb-3">

          <label className="form-label">Situação cadastral:</label>
          <select className="form-select shadow-none" aria-label="Default select example" disabled>
            <option value="1">Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          </div>
        </div>
          <Link to="/empresa/editarempresa/1"><button type="submit" className="btn btncor btnmenu">Editar</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btncor btnmenu" onClick={handleDelete}>Excluir</button></Link>
            <Link to="/empresa"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
      </form>
    </div>

    )
}

export default VisualizarEmpresa