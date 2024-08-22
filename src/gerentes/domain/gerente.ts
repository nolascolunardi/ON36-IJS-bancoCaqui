import { Usuario } from '../../usuarios/usuarios.model';

export class Gerente extends Usuario {
  public idGerente: number;
  public registro: string;

  constructor(registro: string, nome: string, cpf: string, email: string, telefone: string, cep: string, idGerente?: number) {
    super(nome, cpf, email, telefone, cep);
    this.idGerente = idGerente;
    this.registro = registro;
  }

  getId(): number {
    return this.idGerente;
  }

  setId(idGerente: number): void {
    this.idGerente = idGerente;
  }

  getRegistro(): string {
    return this.registro;
  }
}
