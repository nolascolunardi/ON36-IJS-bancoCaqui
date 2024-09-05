import { Usuario } from '../../usuarios/usuarios';
import { Cliente } from '../../clientes/domain/cliente';
import { randomUUID } from 'crypto';

export class Gerente extends Usuario {
  idGerente: string;
  registro: string;
  cliente: Cliente[];

  constructor(registro: string, nome: string, cpf: string, email: string, telefone: string) {
    super(nome, cpf, email, telefone);
    this.idGerente = randomUUID();
    this.registro = registro;
  }
}
