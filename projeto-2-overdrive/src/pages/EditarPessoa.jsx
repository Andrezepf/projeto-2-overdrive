import React, { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask';
import { Link } from 'react-router-dom'



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
    return (
        <div id="edit-profile">
          <h2>Informações da pessoa: </h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome:</label>
              <input type="text" className="form-control" placeholder='João da Silva'/>
            </div>
            <div className="mb-3">
              <label className="form-label">CPF:</label>
              <IMaskInput className="form-control" mask="000.000.000-00" placeholder='454.656.232-88' />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone:</label>
              <IMaskInput className="form-control" mask="(00) 00000-0000" placeholder='(19) 3333-3333' />
            </div>
            <div className="mb-3">
              <label className="form-label">Usuário:</label>
              <input type="text" className="form-control" placeholder='joao.silva'/>
            </div>
            

              
            <label className="form-label">Situação:</label>
            <select className="form-select" aria-label="Default select example">
            <option value="1">Ativo</option>
            <option value="2">Inativo</option>
            <option value="3">Pendente</option>
            </select>
            <label className="form-label">Empresa:</label>
            <select className="form-select" aria-label="Default select example">
            {empresas.map((empresa) => (
              <option value={empresa.id} key={empresa.id}>{empresa.nomefantasia}</option>
            ))}           
            </select>
            <Link to="/pessoa/visualizarpessoa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Salvar</button></Link>
            <Link to="/pessoa/visualizarpessoa/1"><button type="submit" className="btn btncor m-2 mt-4 btn-lg">Voltar</button></Link>
            </form>
        </div>
    )
}

export default EditarPessoa