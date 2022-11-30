const emprestimoForm = document.querySelector("#formEmprestimo");

emprestimoForm.onsubmit = async function(e){
    e.preventDefault();

    let valor = document.querySelector("#valorEmprestimo").value;
    let parcelas = document.querySelector("input[type=radio]:checked").value;

    try{
        valor = await validaValor(valor);

        const loading = document.querySelector("#emprestimo");
        loading.innerHTML = `
            <h3>Simulando empréstimo</h3>
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;

        let resultado = validaEmprestimo(valor, parcelas);

        setTimeout(result => {
            loading.innerHTML = resultado;
        }, 2500);
        

    } catch (error){
        let warning = document.querySelector("#error");
        warning.style.visibility = "visible";
        warning.innerHTML = error;
    }  
}

function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}

function validaValor(valor){
    let n_valor = parseInt(valor);
    if (n_valor > 999){
        return valor;
    } else{
        throw "Valor mínimo para empréstimos: R$1000,00"
    }
}

function validaEmprestimo(valor, parcelas){
    let n_valor = parseInt(valor);
    let n_parcelas = parseInt(parcelas)
    let juros = n_valor + (n_valor/10);
    let valorParcelas = (juros/n_parcelas);
    let resultado;

    if (valorParcelas >= 50){   
        resultado = `
        <div id="resultado">
            <div>
                <h4>Seu empréstimo foi aprovado!</h4>
                <p>Você receberá ${parcelas} parcelas de ${valorParcelas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </div>`;
        return resultado
    } else {
        resultado = `
        <div id="resultado">
            <div>
                <h4>Seu empréstimo não foi aprovado! :/</h4>
            </div>
        </div>`;
        return resultado;
    }
}