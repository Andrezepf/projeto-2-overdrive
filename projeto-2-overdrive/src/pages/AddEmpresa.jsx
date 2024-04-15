import React from 'react'
import { IMaskInput } from 'react-imask'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ValidarCnpj from '../Hooks/ValidarCnpj'
import Swal from 'sweetalert2'
import './AddEmpresa.css'

const AddEmpresa = () => {
  const { register, setValue, setFocus } = useForm();
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    //console.log(cep);
    if (cep.length === 8) {

      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        //console.log(data);
        if (data.erro) {
          document.getElementById('cep').value = ''
          Swal.fire({
            icon: "error",
            title: "CEP inválido!",
            text: "Por favor, digite um CEP válido.",
          });
          setFocus('cep')
          setValue('address', data.logradouro);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', "NN");
        } else {

          // register({ name: 'address', value: data.logradouro });
          setValue('address', data.logradouro);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('addressNumber');
        }

      });
    }
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Empresa cadastrada com sucesso!",
      text: "",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/empresa")
  }

  const valCnpj = (e) => {
    const cnpj = e.target.value.replace(/\D/g, '');
    if (cnpj.length === 14) {

      //console.log(cnpj);
      const newcnpj = ValidarCnpj(cnpj)

      if (newcnpj) {
        //console.log("valido")
        setFocus("dataA")
      } else {
        //console.log("invalido")
        document.getElementById('cnpj').value = ''
        Swal.fire({
          icon: "error",
          title: "CNPJ inválido!",
          text: "Por favor, digite um CNPJ válido.",
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

  const mascaraMoeda = (e) => {
    const onlyDigits = e.target.value
      .split("")
      .filter(s => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    e.target.value = maskCurrency(digitsFloat)
  }

  const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }


  return (
    <div id="order-form-container">
      <h2>Informações da empresa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className="row divBot">
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira o nome empresarial...' minLength={5} maxLength={255} required />
            <label className="form-label">Nome Empresarial:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira o nome fantasia...' minLength={5} maxLength={255} required />
            <label className='form-label'>Nome Fantasia:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="00.000.000/0000-00" name='cnpj' id='cnpj' placeholder='Insira o CNPJ...' minLength={18} maxLength={18} onKeyUp={valCnpj} required />
            <label htmlFor="cnpj">CNPJ:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input type='date' className="form-control shadow-none" {...register("dataA")} placeholder='Insira a data de abertura da empresa...' required />
            <label className="form-label">Data de abertura:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput
              mask="00000-000"
              type="text"
              className="form-control shadow-none"
              id="cep"
              name="cep"
              placeholder="CEP"
              maxLength={9}
              minLength={9}
              required
              onKeyUp={checkCEP}
            />
            <label htmlFor="cep">CEP:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              {...register("address")}
              type="text"
              className="form-control shadow-none"
              id="address"
              name="address"
              placeholder="Rua"
              disabled
              required
              data-input
            />
            <label htmlFor="address" >Rua</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              {...register("addressNumber")}
              type="text"
              className="form-control shadow-none"
              id="number"
              name="number"
              placeholder="Digite o número da residência"

              required
              data-input
            />
            <label htmlFor="number">Número da residência:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              type="text"
              className="form-control shadow-none"
              id="complement"
              name="complement"
              placeholder="Digite o complemento (opcional)"
              data-input
            />
            <label htmlFor="complement">Complemento (opcional):</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              {...register("neighborhood")}
              type="text"
              className="form-control shadow-none"
              id="neighborhood"
              name="neighborhood"
              placeholder="Bairro"
              disabled
              required
              data-input
            />
            <label htmlFor="neighborhood">Bairro</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input
              {...register("city")}
              type="text"
              className="form-control shadow-none"
              id="city"
              name="city"
              placeholder="Cidade"
              disabled
              required
              data-input
            />
            <label htmlFor="city">Cidade</label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <select
              {...register("uf")}
              className="form-select shadow-none"

              disabled
              required
              data-input
            >
              <option value="NN">Estado</option>
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
            <input className="form-control shadow-none" onKeyUp={handlePhone} placeholder='Insira o telefone...' minLength={15} maxLength={15} required />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input type="text" className="form-control shadow-none" placeholder='Insira a natureza jurídica da empresa...' minLength={3} maxLength={255} required />
            <label className="form-label">Natureza jurídica:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput type="text" className="form-control shadow-none" mask="0000-0/00" placeholder='Insira o CNAE...' minLength={9} maxLength={9} required />
            <label className="form-label">CNAE:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input className="form-control shadow-none" onInput={mascaraMoeda} placeholder='Insira o capital...' minLength={3} maxLength={18} required />
            <label className="form-label">Capital:</label>
          </div>


          <div className="col-12 col-sm-6 mb-3">


            <select className="form-select shadow-none" defaultValue="" required>
              <option disabled value="">Situação cadastral:</option>
              <option value="1">Ativo</option>
              <option value="2">Inativo</option>
              <option value="3">Pendente</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btncor btnmenu">Criar</button>
        <Link to="/empresa"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
      </form>
    </div>
  )
}

export default AddEmpresa