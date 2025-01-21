//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
// 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']
console.log(linguagensDeProgramacao);

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let adicionar = ['Java', 'Ruby', 'GoLang'];
for(item of adicionar){
    linguagensDeProgramacao.push(item);
}
console.log(linguagensDeProgramacao);

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let lista_3nomes = ["Pedro","João","Mateus"];
console.log(lista_3nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(lista_3nomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(lista_3nomes[lista_3nomes.length-1]);
