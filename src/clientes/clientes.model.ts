import { Usuario } from '../usuarios/usuarios.model';

export class Cliente extends Usuario{
    public idCliente: number;
    public endereco: string;
    public dataNasc: string;

    constructor(idCliente: number, nome: string, cpf: string, email: string, telefone: string, dataNasc: string, endereco: string) {
        super(nome, cpf, email, telefone);
        this.idCliente = idCliente;
        this.endereco = endereco;
        this.dataNasc = dataNasc;
    }

}