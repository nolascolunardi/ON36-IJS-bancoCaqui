import { Usuario } from '../../../usuarios/usuarios.model';

export class Cliente extends Usuario {
  public idCliente: number;
  private endereco: string;

  constructor(nome: string, cpf: string, email: string, telefone: string, endereco: string, idCliente?: number) {
    super(nome, cpf, email, telefone);
    this.endereco = endereco;
    this.idCliente = idCliente;
  }

  getId(): number {
    return this.idCliente;
  }

  setId(idCliente: number): void {
    this.idCliente = idCliente;
  }
}
