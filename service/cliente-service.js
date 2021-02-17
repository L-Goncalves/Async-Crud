 const listaClientes = () =>{
   return fetch(`http://localhost:3000/profile`).then(res => {
      return res.json();
   })

};

const criaCliente = (nome, email) => { 
   return fetch(`http://localhost:3000/profile`, {
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       },
       body: JSON.stringify({
           nome: nome,
           email: email
       })
   })
   .then( resposta => {
      console.log('finalizou fetch')
       return resposta.body
   })
}

const deletarCliente = (id) =>{
   return fetch(`http://localhost:3000/profile/${id}`,{
         method: 'DELETE'
   })
}
   
export const clienteService = {
   listaClientes,
   criaCliente, 
   deletarCliente
}
