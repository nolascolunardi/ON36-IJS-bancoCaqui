import { Column } from 'typeorm';

export abstract class Usuario {
  @Column()
  public nome: string;
  @Column()
  public cpf: string;
  @Column()
  public email: string;
  @Column()
  public telefone: string;

  constructor(nome: string, cpf: string, email: string, telefone: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}
