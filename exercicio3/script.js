let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let novoArray = [];

numeros.forEach(num => {
    novoArray.push(Math.ceil(num)); 
});

console.log(novoArray);