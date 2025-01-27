import * as readline from 'readline';

class FibonacciChecker {
    public static gerarSequencia(limite: number): number[] {
        const sequencia: number[] = [0, 1];

        while (true) {
            const proximo: number = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
            if (proximo > limite) break;
            sequencia.push(proximo);
        }

        return sequencia;
    }

    public static pertenceASequencia(numero: number): boolean {
        const sequencia: number[] = this.gerarSequencia(numero);
        return sequencia.includes(numero);
    }
}

const questionUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


questionUser.question(
    'Digite um número para verificar se pertence à sequência de Fibonacci: ',
    (input: string): void => {
        const numero = parseInt(input, 10);

        if (isNaN(numero)) {
            console.log('Por favor, insira um número válido.');
        } else {
            const pertence = FibonacciChecker.pertenceASequencia(numero);
            if (pertence) {
                console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
            } else {
                console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
            }
        }

        questionUser.close();
    }
);
