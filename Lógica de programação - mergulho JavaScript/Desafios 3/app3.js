//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let n = 1;
while(n<=10){
    alert(n);
    n++;
}


//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let n2 = 10;
while(n2>=0){
    alert(n2);
    n2=n2-1;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let valor_requisitado = prompt("Digite o último número da contagem regressiva");
let n3 = valor_requisitado;
while(n3>=0){
    console.log(n3);    
    n3=n3-1;
}


//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let valor_requisitado2 = prompt("Digite o último número da contagem progressiva");
let n4 = 0
while(n4<=valor_requisitado2){
    console.log(n4);    
    n4++;
}