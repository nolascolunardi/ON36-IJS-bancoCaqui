import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { TipoUsuarioEnum } from './enum/tipoUsuario.enum';

export abstract class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nome: string;
  @Column()
  cpf: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  telefone: string;
  @Column({ name: 'is_ativo' })
  isAtivo: boolean;

  tipo: TipoUsuarioEnum;

  constructor(id: string, nome: string, cpf: string, email: string, senha: string, telefone: string, tipo: TipoUsuarioEnum) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.isAtivo = true;
    this.tipo = tipo;
  }
}
