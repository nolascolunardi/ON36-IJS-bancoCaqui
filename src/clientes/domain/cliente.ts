import { Usuario } from '../../usuarios/usuarios.model';

export class Cliente extends Usuario {
  public idCliente: number;

  constructor(nome: string, cpf: string, email: string, telefone: string, cep: string, idCliente?: number) {
    super(nome, cpf, email, telefone, cep);
    this.idCliente = idCliente;
  }

  getId(): number {
    return this.idCliente;
  }

  setId(idCliente: number): void {
    this.idCliente = idCliente;
  }
}
