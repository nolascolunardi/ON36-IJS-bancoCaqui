import { Usuario } from '../usuarios/usuarios.model';

export class Cliente extends Usuario {
  constructor(
    public idCliente: number,
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    dataNasc: string,
    endereco: string,
  ) {
    super(nome, cpf, email, telefone);
  }
}
