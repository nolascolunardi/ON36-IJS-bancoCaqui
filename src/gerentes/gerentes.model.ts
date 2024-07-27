import { Usuario } from 'src/usuarios/usuarios.model';

export class Gerente extends Usuario {
  constructor(
    public idGerente: number,
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
  ) {
    super(nome, cpf, email, telefone);
  }
}
