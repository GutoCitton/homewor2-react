import {useState} from 'react';



function Condicional() {
  const [trabalhadores, setTrabalhadores] = useState([]);
  const [userNome, setUserNome] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userProfissao, setUserProfissao] = useState();
  
  function enviarTrabalhador(e) {
    e.preventDefault();
    let listaTemporaria = [...trabalhadores]; //Clonei o trabalhadores
    let id = listaTemporaria.length + 1;
    listaTemporaria.push({id: id, nome: userNome, email: userEmail, profissao: userProfissao}); // Inseri um novo trabalhador
    setTrabalhadores(listaTemporaria)
    console.log(id)
  }

  function limparCampo(index) {
    let listaTemporaria = [...trabalhadores]; //Clonei o trabalhadores
    listaTemporaria.splice(index, 1); // Retirar o trabalhador pelo index
    setTrabalhadores(listaTemporaria);
  }
  
  return (
    <>
      <h2>Cadastre um trabalhador</h2>
      <form>
        <span>Usuário: </span>
        <input value={userNome} type="text" placeholder="Nome do trabalhador" onChange={(e) => setUserNome(e.target.value)} /> <br/>
        <span>Email: </span>
        <input value={userEmail} type="email" placeholder="Email do trabalhador" onChange={(e) => setUserEmail(e.target.value)} /> <br/>
        <span>Profissão: </span>
        <input value={userProfissao} type="text" placeholder="Nome do trabalhador" onChange={(e) => setUserProfissao(e.target.value)} /> <br/>
        <button type="submit" onClick={enviarTrabalhador}>Enviar registro</button>

        
        {trabalhadores.map((trabalhador, index) => {
          return trabalhador.nome && trabalhador.email && trabalhador.profissao &&(
            <div key={trabalhador.id}>
              <h2>Usuário: {trabalhador.nome}</h2>
              <p>E-mail: {trabalhador.email}</p>
              <p>Profissão: {trabalhador.profissao}</p>
              <button onClick={() => limparCampo(index)}>Excluir</button>
            </div>
          )
        })}
      </form>
    </>
  )
}

export default Condicional;