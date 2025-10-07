const registerButton = document.getElementById("btn-register")
const clearButton = document.getElementById("btn-clear")
const clearSearchButton = document.getElementById("clear-search")
const nameInput = document.getElementById("new-name")
const nameError = document.getElementById("name-error")
const emailInput = document.getElementById("new-email")
const emailError = document.getElementById("email-error")
let clients = JSON.parse(localStorage.getItem("clients")) || []
const nameFilter = document.getElementById("name-search")
const emailFilter = document.getElementById("email-search")
const dateFilter = document.getElementById("date-search")

registerButton.onclick = function(event){
    event.preventDefault();
    clients = JSON.parse(localStorage.getItem("clients")) || []
    if(ValidateData()){
        RegisterClient()
    }
}
clearButton.onclick = function(event){
    event.preventDefault();
    nameInput.value = ''
    emailInput.value = ''
}

clearSearchButton.onclick = function(event){
    event.preventDefault();
    nameFilter.value = ''
    emailFilter.value = ''
    dateFilter.value = ''
    LoadTable()
}

function ValidateData(){
    let ok = true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    nameError.style.visibility = 'hidden'
    emailError.style.visibility = 'hidden'
    if(nameInput.value.length < 3){
        nameError.style.visibility = 'visible'
        ok = false
    }
    if(!emailRegex.test(emailInput.value) || clients.some(c => c.email === emailInput.value) ){
        emailError.style.visibility = 'visible'
        ok = false
    }
    return ok
}

function RegisterClient(){
    
    const newClient = {
        name: nameInput.value,
        email: emailInput.value,
        date: new Date().toLocaleString()
    }
    
    clients.push(newClient)
    localStorage.setItem("clients", JSON.stringify(clients))
    nameInput.value = ''
    emailInput.value = ''
    LoadTable()
}   


function LoadTable(){
    var table = document.getElementById("clients-table")
    while (table.rows.length > 2) {
        table.deleteRow(2)
    }

    clients = JSON.parse(localStorage.getItem("clients")) || []
    const clientsLoad = FilterClients(clients)
    for(var i = 0; i < clientsLoad.length ; i++){
        const client = clientsLoad[i]
        var totalRows = table.rows.length
        var row = table.insertRow(totalRows)
        if(i%2==0){
            row.classList.add("par")
        }
        var NameCell = row.insertCell(0)
        var EmailCell = row.insertCell(1)
        var DateCell = row.insertCell(2)
        var ActionCell = row.insertCell(3)

        NameCell.innerText = client.name
        EmailCell.innerText = client.email
        DateCell.innerText = client.date
        var deleteButton = '<button id="'+ client.email +'" class="exclude exclude-client">Excluir <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> </button>'
        ActionCell.innerHTML = deleteButton
    }
    LoadDeleteButtons()
}

function FilterClients(clients){
    clients
    if(nameFilter.value != ''){
        const filter = nameFilter.value.toLowerCase()
        clients = clients.filter(c => 
            c.name.toLowerCase().includes(filter)
        )
    }
    if(emailFilter.value != ''){
        const filter = emailFilter.value.toLowerCase()
        clients = clients.filter(c => 
            c.email.toLowerCase().includes(filter)
        )
    }
    if(dateFilter.value != ''){
        const filter = dateFilter.value.toLowerCase()
        clients = clients.filter(c => 
            c.date.toLowerCase().includes(filter)
        )
    }
    return clients
}

function LoadDeleteButtons(){
    const buttons = document.querySelectorAll('.exclude-client')
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.target
            const clientEmail = clickedButton.id
            console.log(clientEmail)
            DeleteClient(clientEmail)
            
        })
    })
}

function DeleteClient(email){
    clients = clients.filter(c => c.email !== email)
    localStorage.setItem("clients", JSON.stringify(clients))
    LoadTable()
}


nameFilter.addEventListener("input", LoadTable);
emailFilter.addEventListener("input", LoadTable);
dateFilter .addEventListener("input", LoadTable);

LoadTable()