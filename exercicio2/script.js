let numeros = [2, 5, 8, 13, 16, 21];
let novoArray = [];

numeros.forEach(numI=> {
    if (numI % 2 !== 0) { 
        let multiplicador = Math.floor(Math.random() * 10) + 1; 
        novoArray.push(numI * multiplicador);
    } else {
        novoArray.push(numI); 
    }
});

console.log(novoArray);