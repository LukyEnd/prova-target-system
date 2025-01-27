class SomaCalculator {
    private readonly indice: number;
    private soma: number;
    private k: number;

    constructor(indice: number) {
        this.indice = indice;
        this.soma = 0;
        this.k = 0;
    }

    public calcularSoma(): number {
        while (this.k < this.indice) {
            this.k += 1;
            this.soma += this.k;
        }
        return this.soma;
    }
}

const indice = 13;
const calculator = new SomaCalculator(indice);

const resultado: number = calculator.calcularSoma();
console.log(`O valor final de SOMA é: ${resultado}`);
