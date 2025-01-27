function inverterString(str: string): string {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}

const entrada = "Exemplo de uma Frase para fazer o teste";
const resultado = inverterString(entrada);

console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);
