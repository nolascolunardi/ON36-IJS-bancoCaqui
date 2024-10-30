import { Conta } from './conta.entity';
import { TipoConta } from './enums/tiposConta.enum';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity(TipoConta.POUPANCA)
export class ContaPoupanca extends Conta {
  @Column({ name: 'taxa_rendimento', type: 'decimal', precision: 3, scale: 2 })
  taxaRendimento: number;

  constructor(registroGerente: string, idCliente: string, numeroConta: string) {
    super(registroGerente, idCliente, numeroConta, TipoConta.POUPANCA);
    this.taxaRendimento = 0.2;
  }
}
