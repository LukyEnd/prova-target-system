import {FaturamentoPorEstado} from "../models/faturamento-por-estado";

class FaturamentoDistribuidora {
    private static faturamentoPorEstado: FaturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    public static calcularPercentuais(): void {
        const faturamentoTotal = this.calcularFaturamentoTotal();
        console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);

        for (const [estado, faturamento] of Object.entries(this.faturamentoPorEstado)) {
            const percentual = (faturamento / faturamentoTotal) * 100;
            console.log(`${estado}: ${percentual.toFixed(2)}%`);
        }
    }

    private static calcularFaturamentoTotal(): number {
        return Object.values(this.faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    }
}

FaturamentoDistribuidora.calcularPercentuais();
