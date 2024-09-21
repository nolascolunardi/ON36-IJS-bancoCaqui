import { Usuario } from '../../usuarios/usuarios.entity';
import { Cliente } from '../../clientes/domain/cliente.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { TipoUsuarioEnum } from '../../usuarios/enum/tipoUsuario.enum';

@Entity({ name: 'gerentes' })
export class Gerente extends Usuario {
  @Column()
  registro: string;

  @OneToMany(() => Cliente, (cliente) => cliente.gerente)
  clientes: Cliente[];

  constructor(id: string, registro: string, nome: string, cpf: string, email: string, senha: string, telefone: string) {
    super(id, nome, cpf, email, senha, telefone, TipoUsuarioEnum.Gerente);
    this.registro = registro;
  }
}
