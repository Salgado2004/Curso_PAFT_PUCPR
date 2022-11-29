const emprestimoForm = document.querySelector("#formEmprestimo");

emprestimoForm.onsubmit = async function(e){
    e.preventDefault();

    let valor = document.querySelector("#valorEmprestimo").value;
    let parcelas = document.querySelector("input[type=radio]:checked").value;

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

}