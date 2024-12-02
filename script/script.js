function enviarDados(){
    // Pegando os dados
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value
   

    // Enviar os dados
    fetch('http://localhost:3000/cadastros', {
        // Método CRUD
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Conteudo enviado
        },
        body: JSON.stringify({
            //Dados enviados
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        }) 
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
    alert("Dados Enviados")
    location.href = "cadastros.html"
}