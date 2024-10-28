
let nomeCompleto = 'Vinicius Eizo Higa';
let quantidadeLetras = 0;


for (let i = 0; i < nomeCompleto.length; i++) {
    
    if (nomeCompleto[i] !== ' ') {
        quantidadeLetras++; 
    }
}

console.log(`O seu nome completo possui ${quantidadeLetras} letras.`);