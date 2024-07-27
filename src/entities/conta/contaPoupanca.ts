import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    
    private  taxaJuros: number = 0.2;

    constructor(idCliente: number, numeroConta: string, senha: string, saldo: number, status: boolean) {
        super(idCliente, numeroConta, senha, saldo, status);
    }

    public getTaxaJuros(): number {
        return this.taxaJuros;
    }

    public consultarTaxa(): void {
        console.log("A taxa de juros da sua conta poupança é de " + this.taxaJuros + "% ao mês.");
    }

    public setTaxaJuros(): void{
        this.setSaldo(this.getSaldo() + this.getSaldo() * this.taxaJuros)
    }

}