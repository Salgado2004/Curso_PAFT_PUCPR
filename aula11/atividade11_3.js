/*
4. Usando programação assíncrona, crie uma webpage que realize um jogo de adivinhe o número, onde o 
usuário entra com um número, e ele verifique se o número está certo ou não após 3 segundos. Depois 
disso, após 5 segundos ele deixa o usuário tentar novamente.
*/

async function getNumber(){
    let number = parseInt(prompt("Digite o número de 1 a 5"));
    const sorted = await sortNumber()
    const acertou = await verificaNumber(number, sorted);
    if (acertou == true){
        return alert("Você acertou!");
    } else{
        return alert("Hmm :/ Tente novamente em 5 segundos");
    }
}

function sortNumber(){
    let numeroSorteado = Math.random() * 5;
    return numeroSorteado
}

function verificaNumber(number, sorted) {
    setTimeout(()=>{
        let acertou;
        if (number === sorted){
            acertou = true;
        } else{
            acertou = false;
        }
    }, 3000);
    return acertou;
}