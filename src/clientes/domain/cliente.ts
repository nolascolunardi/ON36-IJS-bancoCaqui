import { Usuario } from '../../usuarios/usuarios';
import { randomUUID } from 'crypto';

export class Cliente extends Usuario {
  idCliente: string;
  cep: string;

  constructor(nome: string, cpf: string, email: string, telefone: string, cep: string) {
    super(nome, cpf, email, telefone);
    this.cep = cep;
    this.idCliente = randomUUID();
  }
}
