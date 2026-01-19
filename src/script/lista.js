function Pesquisa() {
const resultado = document.getElementById('resultado')

const clientes = JSON.parse(localStorage.getItem('cliente')) || []

clientes.forEach((cliente, index) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.cpf}</td>
    <td>${cliente.servico}</td>
    <td>${cliente.servidor}</td>
    <td>${cliente.status}</td>
    <td>${cliente.plano}</td>
    `

    const tdAcoes = document.createElement('td')
    
    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = 'Excluir'
    btnExcluir.classList.add('btn', 'btn-danger', 'btn-sm')

    btnExcluir.addEventListener('click', () => {
         if (confirm('Deseja realmente excluir este cliente?')) {
                clientes.splice(index, 1)
                localStorage.setItem('cliente', JSON.stringify(clientes))
                tr.remove()
                filtrar()
            }
    })


    tdAcoes.appendChild(btnExcluir)
    tr.appendChild(tdAcoes)
    resultado.appendChild(tr)

    
    
});
} 
Pesquisa()