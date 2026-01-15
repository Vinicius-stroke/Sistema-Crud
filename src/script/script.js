function Cadastro() {
    // ids selecionados:

const nome = document.getElementById('nome')
const mail = document.getElementById('email')
const password = document.getElementById('senha')
const confirme = document.getElementById('confirmar')
const btnCriarConta = document.getElementById('btn')


// evento de butão de criar conta:

btnCriarConta.addEventListener('click', function(e){
    e.preventDefault()

    const name = nome.value.trim()
    const email = mail.value.trim().toLowerCase()
    const senha = password.value
    const confirma = confirme.value
    
    // condição para que os campos sejam todos preenchidos:

    if(name === '' || email === '' || senha === '' || confirma === '') {
        alert('Preenchas as informações!')
        return
    }

    //validação para que as senhas estejão corretas:

    if(senha !== confirma){
        alert('Senha incorreta!')
        return
    }

    // a senha precisa ter no minimo 8 digitos:

    if(senha.length < 8){
        alert('A senha precisa ter no minimo 8 digitos')
        return
    }

    // uma const que salva os dados no localstorage
    const dados = JSON.parse(localStorage.getItem('dados')) || []

    const informacoes = {email, senha} // objetos salvos

    const emailExiste = dados.some(u => u.email === email)
    
    //validação caso ja exista um email:

    if(emailExiste){
        alert('Email já cadastrado!')
    } else {  

    dados.push(informacoes)
    localStorage.setItem('dados', JSON.stringify(dados))
    alert('Conta criada com sucesso')

    window.location.href = 'login.html'

    }

    nome.value = ''
    mail.value = ''
    password.value = ''
    confirme.value = ''
    

})


}

Cadastro()