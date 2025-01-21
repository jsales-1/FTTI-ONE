//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculo_imc(altura,peso){
    let imc = parseFloat(peso)/parseFloat(altura)**2
    return imc;
}
let altura_qualquer = 1.9;
let peso_qualquer = 84;
let imc_calculado = calculo_imc(altura_qualquer,peso_qualquer); 

let mensagem = "Dados o peso de "+peso_qualquer+" e a altura de "+altura_qualquer+", o IMC é "+ imc_calculado;
console.log(mensagem);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function factorial(numero){
    numero = parseInt(numero);
    if(numero == 1 || numero == 0){
        return 1;
    }
    else{
        let resultado = 1;
        for(let i =1;i<=numero;i++){
            resultado = resultado*i;
        }
        return resultado;
    }
}

for(let i = 0; i<10;i++){
    console.log(` O fatorial de ${i} é ${factorial(i)}\n`);
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolar_real(valor_dolar){
    let valor_real = parseFloat(valor_dolar)*4.8;
    return valor_real;
}
let orcamento_em_dolar = 2.5;
let orcamento_em_real = dolar_real(orcamento_em_dolar);

console.log(`${orcamento_em_dolar} dolares equivalem a ${orcamento_em_real} reais`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function area_e_perimetro_retangulo(altura,largura){
    console.log("Área = "+parseFloat(altura)*parseFloat(largura));
    console.log("Perímetro = "+parseFloat(altura)*2+2*parseFloat(largura));
}
let altura_retangulo = 20;
let largura_retangulo = 23.4;
area_e_perimetro_retangulo(altura_retangulo,largura_retangulo);


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function area_e_perimetro_circulo(raio){
    let pi = 3.14;
    console.log("Área = "+(parseFloat(raio)**2)*pi);
    console.log("Perímetro = "+parseFloat(raio)*2*pi);
}
let raio_circulo = 13;
area_e_perimetro_circulo(raio_circulo);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(let i = 0;i<=10;i++){
        console.log(`${i}*${numero} = ${i*parseInt(numero)}`);
    }}

tabuada(9);