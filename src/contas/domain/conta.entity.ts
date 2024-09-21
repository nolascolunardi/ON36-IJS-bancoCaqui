import { TipoConta } from './enums/tiposConta.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { randomUUID } from 'crypto';
import { Cliente } from '../../clientes/domain/cliente.entity';

@Entity({ name: 'contas' })
@TableInheritance({ column: { type: 'varchar', name: 'tipo_conta' } })
export class Conta {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  gerente: string;
  @ManyToOne(() => Cliente, (cliente) => cliente.contas)
  cliente: string;
  @Column({ name: 'numero_conta' })
  numeroConta: string;
  @Column()
  saldo: number;
  @Column({ name: 'is_ativo' })
  isAtivo: boolean;

  tipoConta: TipoConta;

  constructor(registroGerente: string, idCliente: string, numeroConta: string, tipoConta: TipoConta) {
    this.id = randomUUID();
    this.gerente = registroGerente;
    this.cliente = idCliente;
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.isAtivo = true;
    this.saldo = 0;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public sacar(valor: number): void {
    if (this.saldo < valor) {
      throw new Error('Saldo insuficiente.');
    }
    this.saldo -= valor;
  }
}
