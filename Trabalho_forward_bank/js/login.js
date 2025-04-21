validateTest("Validando cpf", () => {
    assert(validateId("CPF", "12345678"));
});

validateTest("Validando cpf", () => {
    assert(validateId("CPF", "12345678910"));
});

validateTest("Validando nome", () => {
    assert(validateId("Nome", "joão"));
});

validateTest("Validando nome", () => {
    assert(validateId("Nome", "Carlos Sampaio"));
});

validateTest("Validando email", () => {
    assert(validateId("Email", "Carlos Sampaio"));
});

validateTest("Validando email", () => {
    assert(validateId("Email", "lucas.costa@gmail.com"));
});

validateTest("Validando senha 12345", () => {
    assert(validatePass("12345"));
});

validateTest("Validando senha 'senha'", () => {
    assert(validatePass("senha"));
});

validateTest("Validando senha 'z4nBXf#u'", () => {
    assert(validatePass("z4nBXf#u"));
});



const info = document.querySelector("#info");

info.oninput = function(e){
    let identification = info.value;
    let input = document.querySelector("#identification");
    let label = document.querySelector("#idLabel");

    label.innerHTML = `${identification}:`;
    input.placeholder = identification;
};


const form = document.querySelector("#LoginForm");

form.onsubmit = async function(e){
    e.preventDefault();

    let info = document.querySelector("#info").value;
    let identification = document.querySelector("#identification").value;
    let password = document.querySelector("#password").value;

    try{
        let response = await validateId(info, identification);
        let pass = await validatePass(password);
        let enter = await login(info, response, pass);
        if (enter != null){
            window.location.replace(enter);
        }
    } catch(error){
        let warning = document.querySelector("#error");
        warning.style.visibility = "visible";
        warning.innerHTML = error;
    }
};

function validateId(info, text){
    switch(info){
        case("CPF"):
            let cpf = text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
            if (/(\d{3}).(\d{3}).(\d{3})-(\d{2})/.test(cpf)){
                return cpf;
            } else{
                throw "CPF inválido"
            }
        case("Nome"):
            let nome = text;
            if (/(\w)(\s)(\w)/.test(nome)){
                return nome;
            } else{
                throw "Nome inválido"
            }
        case("Email"):
            let email = text;
            if (/(\w)@(\w).(\w)/.test(email)){
                return email;
            } else{
                throw "Email inválido"
            }
    };
};

function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}

function validateTest(desc,fn){
    try {
        fn();
        console.log("Test passed:"+desc);
    } catch (error) {
        console.log("Test fail:"+desc);
        console.assert(error);
    }
}

function validatePass(password){
    if (/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/.test(password)){
        return password;
    } else{
        throw "Senha inválida"
    }
}

function login(info, id, pass){
    let login;
    switch(info){
        case("CPF"):
            login = id === "106.194.169-80";
        break;
        case("Email"):
            login = id === "leosalgado2004@gmail.com";
        break;
        case("Nome"):
            login = id === "Leonardo Salgado";
        break;
    }
    let senha = pass === "Cr3@t1v3S3nh@";
    if (login && senha){
        return "home.html";
    } else{
        throw `${info} ou senha incorretos`
    }
}