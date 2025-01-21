//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let tag = document.querySelector("h1");
tag.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botao_console(){
    console.log("O botão console foi clicado");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botao_alerta(){
    alert("Eu amo JS");
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botao_prompt(){
    let cidade = prompt("Diga o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}


//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botao_soma(){
    let valor1 = prompt("Digite um número");
    let valor2 = prompt("Digite outro número");
    let soma = Number(valor1)+Number(valor2);
    alert(`A soma desse dois números é ${soma}`)
}