import { Conta } from './conta.entity';
import { TipoConta } from './enums/tiposConta.enum';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity(TipoConta.CORRENTE)
export class ContaCorrente extends Conta {
  @Column({ name: 'limite_cheque' })
  limiteCheque: number;

  constructor(registroGerente: string, idCliente: string, numeroConta: string) {
    super(registroGerente, idCliente, numeroConta, TipoConta.CORRENTE);
    this.limiteCheque = 100;
  }
}
