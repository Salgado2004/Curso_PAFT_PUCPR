document.body.onload = function (){
    lista = document.querySelector("#listaContatos");
    let url = "http://127.0.0.1:5000/contacts";
    fetch(url,{
        method:"GET"
    })
    .then(response => response.json())
    .then(json =>{
        json.contacts.forEach(element => {
            lista.innerHTML += `
            <li>
                <b>Nome</b>: ${element.name} 
                <b>Telefone</b>: ${element.phone}
                <button class="delete" id="${element.id}">Apagar</button>
                <button class="edit" id="${element.id}">Editar</button>
            </li>`;
        });
    })
    .catch(error => console.error(error))
}