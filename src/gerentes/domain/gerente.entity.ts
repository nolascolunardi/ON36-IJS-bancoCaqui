import { Usuario } from '../../usuarios/usuarios.entity';
import { Cliente } from '../../clientes/domain/cliente.entity';
import { randomUUID } from 'crypto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gerentes' })
export class Gerente extends Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  registro: string;

  @OneToMany(() => Cliente, (cliente) => cliente.gerente)
  clientes: Cliente[];

  constructor(id: string, registro: string, nome: string, cpf: string, email: string, telefone: string) {
    super(nome, cpf, email, telefone);
    this.id = id;
    this.registro = registro;
  }
}
