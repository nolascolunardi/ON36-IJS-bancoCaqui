import { Conta } from "./conta";    

export class ContaCorrente extends Conta {

    private limiteChequeEspecial: number;

    constructor(idCliente: number, numeroConta: string, senha: string, saldo: number,  status: boolean, limiteChequeEspecial: number) {
        super(idCliente, numeroConta, senha, saldo, status);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }       

    public getLimiteChequeEspecial(): number {
        return this.limiteChequeEspecial;
    }

    public setLimiteChequeEspecial(limiteChequeEspecial: number): void {
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public consultarCheque(): void {
        console.log(`Limite cheque especial : R$ ${this.getLimiteChequeEspecial()}`);
    }
    
    public depositarCheque(valor: number): void {
        this.setSaldo(this.getSaldo() + valor);
        console.log(`Depósito de cheque no valor de R$ ${valor} realizado com sucesso.`);
    }

}