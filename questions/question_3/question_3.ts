import * as fs from 'fs';
import {Faturamento} from '../models/faturamento-interface';

class FaturamentoMensal {
    public static carregarDadosFaturamento(caminho: string): Faturamento[] {
        const dados = fs.readFileSync(caminho, 'utf-8');
        return JSON.parse(dados);
    }

    public static calcularMenorFaturamento(faturamento: Faturamento[]): number {
        const valores = faturamento.filter(item => item.valor > 0)
            .map(item => item.valor);
        if (valores.length === 0) {
            return 0;
        }
        return Math.min(...valores);
    }

    public static calcularMaiorFaturamento(faturamento: Faturamento[]): number {
        const valores = faturamento.filter(item => item.valor > 0)
            .map(item => item.valor);
        if (valores.length === 0) {
            return 0;
        }
        return Math.max(...valores);
    }

    public static calcularMediaFaturamento(faturamento: Faturamento[]): number {
        const diasComFaturamento = faturamento.filter(item => item.valor > 0)
            .map(item => item.valor);
        if (diasComFaturamento.length === 0) {
            return 0;
        }
        const soma = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
        return soma / diasComFaturamento.length;
    }

    public static contarDiasAcimaDaMedia(faturamento: Faturamento[], media: number): number {
        return faturamento.filter(item => item.valor > media).length;
    }
}

const faturamento = FaturamentoMensal.carregarDadosFaturamento('./question_3/data.json');

const menorFaturamento = FaturamentoMensal.calcularMenorFaturamento(faturamento);
const maiorFaturamento = FaturamentoMensal.calcularMaiorFaturamento(faturamento);
const mediaFaturamento = FaturamentoMensal.calcularMediaFaturamento(faturamento);
const diasAcimaDaMedia = FaturamentoMensal.contarDiasAcimaDaMedia(faturamento, mediaFaturamento);

console.log(`Menor faturamento: R$ ${menorFaturamento}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
console.log(`Média de faturamento: R$ ${mediaFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);
