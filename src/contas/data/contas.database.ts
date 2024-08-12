import { ContaCorrente } from '../models/entities/conta-corrente';
import { ContaPoupanca } from '../models/entities/conta-poupanca';

export class ContasDatabase {
  database = [new ContaCorrente('123', 2, '1225', 100, 1), new ContaPoupanca('123', 1, '1224', 100, 2)];
}
