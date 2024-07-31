export abstract class Usuario {
  public nome: string;
  public cpf: string;
  public email: string;
  public telefone: string;

  constructor(nome: string, cpf: string, email: string, telefone: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}
