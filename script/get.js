fetch("http://localhost:3000/cadastros")
    .then(resposta => resposta.json())
    .then(dados => {
        // Selecionando a tabela
        var tabelaCorpo = document.getElementById("tableCadastros")

        // Uma linha da tabela para cada JSON
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdTelefone = document.createElement('td')
            var tdMensagem = document.createElement('td')
            

            // Preenchendo a tabela com as informações
            tdNome.innerHTML = objeto.nome
            tdSobrenome.innerHTML = objeto.sobrenome
            tdEmail.innerHTML = objeto.email
            tdTelefone.innerHTML = objeto.telefone
            tdMensagem.innerHTML = objeto.mensagem

            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdEmail)
            tr.appendChild(tdTelefone)
            tr.appendChild(tdMensagem)
            

            tabelaCorpo.appendChild(tr)
        });
    })