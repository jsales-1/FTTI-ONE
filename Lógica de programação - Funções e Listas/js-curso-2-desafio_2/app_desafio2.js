//Criar uma função que exibe "Olá, mundo!" no console.
function saudacoes(){
    console.log("Olá, mundo!");
}

saudacoes();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacoes_pessoa(nome){
    console.log(`Olá,${nome}`);
}

let nome_qualquer = "David";
saudacoes_pessoa(nome_qualquer);


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrar(numero){
    return parseFloat(numero)*2;
}

let numero_qualquer = 3;
console.log(`O dobro de ${numero_qualquer} é ${dobrar(numero_qualquer)}`);


//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media_tres_numeros(numero1,numero2,numero3){
    return (parseFloat(numero1)+parseFloat(numero2)+parseFloat(numero3))/3;
}
let n1 = 10;
let n2 = 3;
let n3 = 2;
let media = media_tres_numeros(n1,n2,n3);

console.log(`A média entre ${n1},${n2} e ${n3} é ${media}`);


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior_entre_dois_numero(numero1,numero2){
    let maior_numero = "nenhum"
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if(numero1>numero2){
        maior_numero = numero1;
    }
    else if(numero1<numero2){
        maior_numero = numero2;
    }
    else{
        console.log("Os números devem ser diferentes");
    }
    return maior_numero;
}
let number1 = 20;
let number2 = 30;
let maior_number = maior_entre_dois_numero(number1,number2);
console.log(`Entre ${number1} e ${number2}, o maior é ${maior_number}`);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero){
    return parseFloat(numero)**2;
}

let outro_numero_qualquer = 2;
console.log(`O quadrado de ${outro_numero_qualquer} é ${quadrado(outro_numero_qualquer)}`);