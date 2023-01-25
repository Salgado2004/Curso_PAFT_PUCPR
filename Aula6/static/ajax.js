document.body.onload = function (){
    lista = document.querySelector("#listaContatos");
    filter = document.querySelector("#filterList");
    let url = "http://127.0.0.1:5000/contacts";
    fetch(url,{
        method:"GET"
    })
    .then(response => response.json())
    .then(json =>{
        json.contacts.forEach(element => {
            lista.innerHTML += `
            <li id="contact${element.id}">
                <b>Nome</b>: ${element.name} 
                <b>Telefone</b>: ${element.phone}
                <button class="delete" id="${element.id}">Apagar</button>
                <button class="edit" id="${element.id}" onclick="edit('${element.id}','${element.name}','${element.phone}')">Editar</button>
            </li>`;
            filter.innerHTML += `
                <option value="${element.id}">${element.name}</option>
            `;
        });
    })
    .catch(error => console.error(error))
}

filter = document.querySelector("#filterList");
filter.oninput = function(){
    lista = document.querySelector("#listaContatos");
    if (filter.value == "all"){
        window.location.reload();
    }else{
        let url = `http://127.0.0.1:5000/contacts/${filter.value}`;
        fetch(url,{
            method:"GET"
        })
        .then(response => response.json())
        .then(json =>{
            lista.innerHTML = `
            <li id="contact${json.contact.id}">
                <b>Nome</b>: ${json.contact.name} 
                <b>Telefone</b>: ${json.contact.phone}
                <button class="delete" id="${json.contact.id}">Apagar</button>
                <button class="edit" id="${json.contact.id}" onclick="edit('${json.contact.id}','${json.contact.name}','${json.contact.phone}')">Editar</button>
            </li>`;
        })
        .catch(error => console.error(error))
    }
}

add = document.querySelector("#add");
add.onclick = function(){
    form = document.querySelector("#newContact");
    form.innerHTML = `
    <form id="novoContato" action="/contacts" method="POST"><br>
        <fieldset>
            <label for="nome">Nome do novo contato:</label>
            <input type="text" name="nome" id="nome" placeholder="Nome">
            <label for="tel">Telefone:</label>
            <input type="tel" name="tel" id="tel" placeholder="Telefone">
            <button type="submit">Salvar novo contato</button>
        </fieldset>
    </form>
    `;

    novoContato = document.querySelector("#novoContato");
    novoContato.onsubmit = function(e){
        e.preventDefault();
        nome = document.querySelector("#novoContato #nome").value;
        tel = document.querySelector("#novoContato #tel").value;
        form = document.querySelector("#newContact");
        form.innerHTML = "";

        if (nome != null && tel != null){
            let url = `http://127.0.0.1:5000/contacts`;
            const data = {"name": nome, "tel": tel};
            fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json =>{
                lista.innerHTML += `
                <li id="contact${json.contact.id}">
                    <b>Nome</b>: ${json.contact.name} 
                    <b>Telefone</b>: ${json.contact.phone}
                    <button class="delete" id="${json.contact.id}">Apagar</button>
                    <button class="edit" id="${json.contact.id}" onclick="edit('${json.contact.id}','${json.contact.name}','${json.contact.phone}')">Editar</button>
                </li>`;
                filter.innerHTML += `
                <option value="${json.contact.id}">${json.contact.name}</option>
            `;
            })
            .catch(error => console.error(error))
        }
    }
}

function edit(id, nome, phone){
    contato = document.querySelector(`#contact${id}`);
    contato.innerHTML = `
    <form id="editarContato" action="/contacts" method="PUT">
        <label for="nome"><b>Nome:</b.</label>
        <input type="text" name="nome" id="nome" placeholder="Nome" value="${nome}">
        <label for="tel"><b>Telefone:</b></label>
        <input type="tel" name="tel" id="tel" placeholder="Telefone" value="${phone}">
        <button type="submit">Salvar contato</button>
    </form>
    `;
}

