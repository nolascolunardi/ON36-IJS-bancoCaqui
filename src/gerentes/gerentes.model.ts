import { Usuario } from "src/usuarios/usuarios.model";

export class Gerente extends Usuario {
    public idGerente: number;
    constructor(idGerente: number, nome: string, cpf: string, email: string, telefone: string, senha: string) {
        super(nome, cpf, email, telefone);
        this.idGerente = idGerente;
    }
}