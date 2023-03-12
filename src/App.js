import { useState } from 'react'
import './index.css';
import { FiSearch } from 'react-icons/fi';
import './style.css'
import api from './services/api';

function App() {
  // input(valor do estado) setInput(passa um novo valor nesse estado)
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function clique(){
    if (input === ""){
      alert("Digite seu CEP")
      return
    }
    // tentativa doque voce quer fazer
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
      // data é onde vai estar o cep no console
      console.log(response.data)
      // se der erro
    }catch{
      alert("OPS, Algo deu errado. Confira seu CEP!!")
      setInput("")
    }

  }
  return (
    <div className="container">
      <h1 className='container-titulo'>Procure seu CEP</h1>
    <div className='input'>

      <input 
        type="text" 
        placeholder='Digite seu CEP...' 
        value={input}   
        onChange={(evento) => setInput(evento.target.value)}
      ></input>

      <button className='botao-procurar' onClick={clique}>
        <FiSearch size={25} color="#fff"/>
        </button>

     </div>

    {Object.keys(cep).length > 0 && (
      <main className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>{cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
    </main>
    )}
    

    </div>
  
  );
}

export default App;
