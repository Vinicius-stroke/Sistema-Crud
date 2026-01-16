function Formulario () {
    const nomeForm = document.getElementById('nome')
    const emailForm = document.getElementById('email')
    const cpfForm = document.getElementById('cpf')
    const telefoneForm = document.getElementById('telefone')
    const servicoForm = document.getElementById('servico')
    const statusForm = document.getElementById('status')
    const servidorForm = document.getElementById('servidor')
    const planoForm = document.getElementById('plano')
    const btnLimpar = document.getElementById('btnLimpar')
    const btnSalvar = document.getElementById('btnSalvar')
    const btnSeguinte = document.getElementById('btnSeguinte')


    btnSalvar.addEventListener('click', function(e) {
        e.preventDefault()

        const nome = nomeForm.value.trim().toLowerCase()
        const email = emailForm.value.trim().toLowerCase()
        const cpf = cpfForm.value.trim()
        const telefone = telefoneForm.value.trim()
        const servico = servicoForm.value
        const status = statusForm.value
        const servidor = servidorForm.value
        const plano = planoForm.value

        if(!nome || !email || !cpf || !telefone || !servico || !status || !servidor || !plano) {
            alert('Complete todas as informações')
            return
        }

        const cliente = JSON.parse(localStorage.getItem('cliente')) || []
        const usuario = {nome, email, cpf, telefone, servico, status, servidor, plano}

        cliente.push(usuario)

        localStorage.setItem('cliente', JSON.stringify(cliente))
        
    })

    btnLimpar.addEventListener('click', () => {
        nomeForm.value = ''
        emailForm.value = ''
        cpfForm.value = ''
        telefoneForm.value = ''
        servicoForm.value = ''
        statusForm.value = ''
        servidorForm.value = ''
        planoForm.value = ''

    })

    btnSeguinte.addEventListener('click', () => {
        setTimeout(function() {
            window.location.href = 'listas.html'
        }, 1000)
    })
}

Formulario()
