import { Usuario } from '../../../usuarios/usuarios.model';

export class Cliente extends Usuario {
  public idCliente: number;
  private endereco: string;

  constructor(nome: string, cpf: string, email: string, telefone: string, endereco: string) {
    super(nome, cpf, email, telefone);
    this.endereco = endereco;
  }

  getIdCliente(): number {
    return this.idCliente;
  }

  setIdCliente(idCliente: number): void {
    this.idCliente = idCliente;
  }
}
