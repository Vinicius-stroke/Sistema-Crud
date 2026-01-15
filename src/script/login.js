function Login (){
    const mail = document.getElementById('email')
    const password = document.getElementById('senha')
    const btnLogin = document.getElementById('btnLogin')

    btnLogin.addEventListener('click', function(e){
        e.preventDefault()

        const email = mail.value.trim().toLowerCase()
        const senha = password.value


        if(email === '' || senha === ''){
            alert('Preencha os campos!')
            return
        }

        const dados = JSON.parse(localStorage.getItem('dados'))

        if(!dados || dados.length === 0){
            alert("Nenhuma conta cadastrada")
            return
        }

        const usuario = dados.find(u => u.email === email && u.senha === senha)

        if(!usuario){
            alert('E-mail ou senha invalidos')
            return
        }

        alert('login realizado com sucesso')
    })
}

Login()
