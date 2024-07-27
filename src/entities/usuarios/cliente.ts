import { Usuario } from "./usuario";

export class Cliente extends Usuario {
    private idCliente: number;
    private endereco: string;
    private dataNascimento: Date;

    constructor(idCliente: number, nome: string, cpf: string, email: string, telefone: string, dataNascimento: Date, endereco: string) {
        super(nome, cpf, email, telefone);
        this.idCliente = idCliente;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
    }

    public getId(): number {
        return this.idCliente;
    }
    
    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }
}