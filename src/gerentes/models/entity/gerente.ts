import { Usuario } from 'src/usuarios/usuarios.model';

export class Gerente extends Usuario {
  public idGerente: number;
  public registro: string;

  constructor(registro: string, nome: string, cpf: string, email: string, telefone: string) {
    super(nome, cpf, email, telefone);
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
