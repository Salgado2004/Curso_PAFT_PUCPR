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
            <li class="item" id="contact${element.id}">
                <b>Nome:</b> ${element.name} 
                <b>Telefone:</b> ${element.phone}
                <div>
                    <button class="delete" id="${element.id}" onclick="delete_contact(${element.id})"><span class="material-symbols-outlined">delete</span></button>
                    <button class="edit" id="${element.id}" onclick="edit('${element.id}','${element.name}','${element.phone}')"><span class="material-symbols-outlined">edit</span></button>
                </div>
            </li>`;
            filter.innerHTML += `
                <option id="${element.id}" value="${element.name}">
            `;
        });
    })
    .catch(error => console.error(error))
}

filter = document.querySelector("#filterList");
filtro = document.querySelector("#filter");
filtro.oninput = function(){
    lista = document.querySelector("#listaContatos");
    if (filtro.value == "all"){
        window.location.reload();
    }else{
        filter.childNodes.forEach(element => {
            if (element.value == filtro.value){
                idContato = element.id;
            }
        });
        let url = `http://127.0.0.1:5000/contacts/${idContato}`;
        fetch(url,{
            method:"GET"
        })
        .then(response => response.json())
        .then(json =>{
            lista.innerHTML = `
            <li class="item" id="contact${json.contact.id}">
                <b>Nome:</b> ${json.contact.name} 
                <b>Telefone:</b> ${json.contact.phone}
                <div>
                    <button class="delete" id="${json.contact.id}" onclick="delete_contact(${json.contact.id})"><span class="material-symbols-outlined">delete</span></button>
                    <button class="edit" id="${json.contact.id}" onclick="edit('${json.contact.id}','${json.contact.name}','${json.contact.phone}')"><span class="material-symbols-outlined">edit</span></button>
                </div>
            </li>`;
        })
        .catch(error => console.error(error))
    }
}

add = document.querySelector("#add");
add.onclick = function(){
    form = document.querySelector("#newContact");
    form.style.display = "block";
    document.querySelector("#main-content").style.filter = "blur(3px)"
    form.innerHTML = `
    <button id="fechar"><span class="material-symbols-outlined">close</span></button>
    <form id="novoContato" action="/contacts" method="POST"><br>
        <fieldset>
            <label for="nome">Nome do novo contato:</label>
            <input type="text" name="nome" id="nome" placeholder="Nome">
            <label for="tel">Telefone:</label>
            <input type="tel" name="tel" id="tel" placeholder="Telefone">
            <button type="submit" id="submit">Salvar novo contato</button>
        </fieldset>
    </form>
    `;

    fecharJanela = document.querySelector("#fechar");
    fecharJanela.onclick = function(e){
        janela = document.querySelector("#newContact");
        form = document.querySelector("#novoContato");
        main = document.querySelector("#main-content");

        main.style.filter = "";
        janela.style.display = "none";
        novo.disabled = false;
        form.reset();
    }

    novoContato = document.querySelector("#novoContato");
    novoContato.onsubmit = function(e){
        e.preventDefault();
        nome = document.querySelector("#novoContato #nome").value;
        tel = document.querySelector("#novoContato #tel").value;
        form = document.querySelector("#newContact");
        form.innerHTML = "";
        document.querySelector("#main-content").style.filter = "blur(0px)";
        form.style.display = "none";

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
                <li class="item" id="contact${json.contact.id}">
                    <b>Nome:</b> ${json.contact.name} 
                    <b>Telefone:</b> ${json.contact.phone}
                    <div>
                        <button class="delete" id="${json.contact.id}" onclick="delete_contact(${json.contact.id})"><span class="material-symbols-outlined">delete</span></button>
                        <button class="edit" id="${json.contact.id}" onclick="edit('${json.contact.id}','${json.contact.name}','${json.contact.phone}')"><span class="material-symbols-outlined">edit</span></button>
                    </div>
                    </li>`;
                filter.innerHTML += `
                <option id="${element.id}" value="${element.name}">
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
        <button type="submit"><span class="material-symbols-outlined">done</span></button>
        <button><span class="material-symbols-outlined">close</span></button>
    </form>
    `;

    formEdit = document.querySelector("#editarContato");
    formEdit.onsubmit = function(e){
        e.preventDefault();
        nomeEditado = document.querySelector("#editarContato #nome").value;
        telEditado = document.querySelector("#editarContato #tel").value;
        let url = `http://127.0.0.1:5000/contacts/${id}`;
        const new_data = {"name": nomeEditado, "tel": telEditado};
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_data)
        })
        .then(response => {
            if (response.status == 200){
                window.location.reload()
            }
        })
        .catch(error => console.error(error))
    }
}

function delete_contact(id){
    let url = `http://127.0.0.1:5000/contacts/${id}`;
    fetch(url, { method: 'DELETE' })
    .then(response => {
        if (response.status == 200){
            window.location.reload()
        }
    })
    .catch(error => console.error(error))
}

