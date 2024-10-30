import { Usuario } from '../../usuarios/usuarios.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Gerente } from '../../gerentes/domain/gerente.entity';
import { Conta } from '../../contas/domain/conta.entity';
import { TipoUsuarioEnum } from '../../usuarios/enum/tipoUsuario.enum';

@Entity({ name: 'clientes' })
export class Cliente extends Usuario {
  @ManyToOne(() => Gerente, (gerente) => gerente.clientes, { cascade: true })
  gerente: string;

  @OneToMany(() => Conta, (conta) => conta.cliente)
  contas: Conta[];

  cep: string;

  constructor(id: string, nome: string, cpf: string, email: string, senha: string, telefone: string, cep: string, gerenteId: string) {
    super(id, nome, cpf, email, senha, telefone, TipoUsuarioEnum.Cliente);
    this.gerente = gerenteId;
    this.cep = cep;
  }
}
