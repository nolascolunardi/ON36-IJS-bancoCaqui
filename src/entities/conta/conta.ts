import { Cliente } from '../usuarios/cliente';

export abstract class Conta {

    private numeroConta: string;
    private saldo: number;
    private idCliente: number;
    private status: boolean;
    private senha: string;

    constructor(idCliente: number, numeroConta: string, senha: string, saldo: number,  status: boolean) {
        this.numeroConta = numeroConta;
        this.senha = senha;
        this.saldo = saldo;
        this.idCliente = idCliente;
        this.status = status;
    }

    public getNumeroConta(): string {
        return this.numeroConta;
    }

    public getStatus(): boolean {
        return this.status;
    }

    public getSenha(): string {
        return this.senha;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getIdCliente(): number {
        return this.idCliente;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public consultarSaldo(): void {
        console.log(`Saldo atual : R$ ${this.saldo}`);
    }

    public sacar(valor: number): void {
        if (this.saldo >= valor && valor > 0) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso no valor de R$ ${valor}.`);
        } else {
            console.log(`Saldo insuficiente para saque no valor de R$ ${valor}.`);
            this.consultarSaldo();
        }
    }

    public depositar(valor: number): void {
        if (valor > 0){
            this.saldo += valor;
            console.log("Depósito realizado com sucesso.");
        }
    }

    public transferir(valor: number, contaDestino: Conta): void {
        if (this.saldo >= valor && valor > 0) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            console.log(`Transferência realizada com sucesso no valor de R$ ${valor}.`);
        } else {
            console.log("Saldo insuficiente para transferência ou valor incorreto.");
        }
    }

}