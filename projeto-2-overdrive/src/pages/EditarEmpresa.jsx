import React from 'react'
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask'
import { Link, useNavigate } from 'react-router-dom'



const EditarEmpresa = () => {
  const { register, setValue, setFocus } = useForm();
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    //console.log(cep);
    if (cep.length === 8) {

      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setFocus('addressNumber');

      });
    }
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/empresa/visualizarempresa/1")
  }


    return (
        <div id="order-form-container" className="my-md-4 px-md-0">
      <h2>Informações da empresa: </h2>
      <form id="address-form" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Empresa de teste ltda' minLength={3} maxLength={255} required />
            <label className="form-label">Nome Empresarial:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Test Company' minLength={3} maxLength={255} required />
            <label htmlFor='nomefantasia'>Nome Fantasia:</label>
          </div>
          <div className="col-12 col-sm-6 mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="000.000.000/0000-00" defaultValue='333.444.555/0001-66' minLength={19} maxLength={19} data-input required />
            <label htmlFor="cnpj">CNPJ:</label>
          </div>
          <div className="col-12 col-sm-6 form-floating">
            <input type='date' className="form-control" defaultValue="2001-12-13" required />
            <label className="form-label">Data de abertura:</label>
          </div>
          <div className="mb-3 form-floating">
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
          <div className="col-12 col-sm-6 form-floating">
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
          <div className="col-12 col-sm-6 form-floating">
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

          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask="(00) 00000-0000" defaultValue="(19) 99999-3333" minLength={14} maxLength={15} required />
            <label className="form-label">Telefone:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Prestação de serviço' minLength={3} maxLength={255} required />
            <label className="form-label">Natureza jurídica:</label>
          </div>
          <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-none" defaultValue='Testes de produtos' minLength={3} maxLength={255} required />
            <label className="form-label">Atividades Econômicas:</label>
          </div>
          <div className="mb-3 form-floating">
            <IMaskInput className="form-control shadow-none" mask={Number} defaultValue='350000,00' minLength={3} maxLength={15} required />
            <label className="form-label">Capital:</label>
          </div>


          <div className="mb-3">

          <label className="form-label">Situação cadastral:</label>
          <select className="form-select shadow-none" aria-label="Default select example" required>
            <option value="1">Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
          </select>
          </div>
        </div>
        <button type="submit" className="btn btncor m-2 mt-4 btn-lg">Salvar</button>
        <Link to="/empresa/visualizarempresa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
      </form>
    </div>

        
    )
}

export default EditarEmpresa