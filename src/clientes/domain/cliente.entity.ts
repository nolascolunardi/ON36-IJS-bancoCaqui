import { Usuario } from '../../usuarios/usuarios.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gerente } from '../../gerentes/domain/gerente.entity';

@Entity({ name: 'clientes' })
export class Cliente extends Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Gerente, (gerente) => gerente.clientes, { cascade: true })
  gerente: string;

  @Column()
  cep: string;

  constructor(id: string, nome: string, cpf: string, email: string, telefone: string, cep: string, gerenteId: string) {
    super(nome, cpf, email, telefone);
    this.id = id;
    this.cep = cep;
    this.gerente = gerenteId;
  }
}
