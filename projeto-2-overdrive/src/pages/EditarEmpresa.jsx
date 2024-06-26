import React from 'react'
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask'
import { Link, useNavigate } from 'react-router-dom'
import ValidarCnpj from '../Hooks/ValidarCnpj';
import Swal from 'sweetalert2'


const EditarEmpresa = () => {
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
      title: "Empresa atualizada com sucesso!",
      text: "",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/empresa/visualizarempresa/1")
  }

  const valCnpj = (e) => {
    const cnpj = e.target.value.replace(/\D/g, '');
    if (cnpj.length === 14) {

      //console.log(cnpj);
      const newcnpj = ValidarCnpj(cnpj)

      if (newcnpj) {
        //console.log("valido")
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
            <input type="text" className="form-control shadow-none" defaultValue='Empresa de teste ltda' minLength={3} maxLength={255} required />
            <label className="form-label">Nome Empresarial:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Test Company' minLength={3} maxLength={255} required />
            <label htmlFor='nomefantasia'>Nome Fantasia:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="00.000.000/0000-00" name='cnpj' id='cnpj' defaultValue='80.075.560/0001-44' minLength={18} maxLength={18} onKeyUp={valCnpj} data-input required />
            <label htmlFor="cnpj">CNPJ:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input type='date' className="form-control" defaultValue="2001-12-13" required />
            <label className="form-label">Data de abertura:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput
              mask="00000-000"
              type="text"
              className="form-control shadow-none"
              id="cep"
              name="cep"
              defaultValue='90670140'
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
              defaultValue="Rua Chile"
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
              defaultValue="50"

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
              defaultValue="sala 421"
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
              defaultValue="Jardim Botânico"
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
              defaultValue="Porto Alegre"

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
              defaultValue="RS"
              disabled
              required
              data-input
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
            <input className="form-control shadow-none" onKeyUp={handlePhone} defaultValue="(19) 99999-3333" minLength={14} maxLength={15} required />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <input className="form-control shadow-none" onInput={mascaraMoeda} defaultValue='R$ 350.000,00' minLength={3} maxLength={18} required />
            <label className="form-label">Capital:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput type="text" className="form-control shadow-none" mask="0000-0/00" defaultValue='5684-7/02' minLength={9} maxLength={9} required />
            <label className="form-label">CNAE:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Prestação de serviço' minLength={3} maxLength={255} required />
            <label className="form-label">Natureza jurídica:</label>
          </div>


          <div className="mb-3">

            <label className="form-label">Situação cadastral:</label>
            <select className="form-select shadow-none" defaultValue="1" required>
              <option disabled value="">Situação cadastral:</option>
              <option value="1">Ativo</option>
              <option value="2">Inativo</option>
              <option value="3">Pendente</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btncor btnmenu">Salvar</button>
        <Link to="/empresa/visualizarempresa/1"><button type="submit" className="btn btncor btnmenu">Voltar</button></Link>
      </form>
    </div>


  )
}

export default EditarEmpresa