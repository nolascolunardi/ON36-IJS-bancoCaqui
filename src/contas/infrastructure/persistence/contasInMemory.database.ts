import { ContaCorrente } from '../../domain/conta-corrente';
import { ContaPoupanca } from '../../domain/conta-poupanca';

export class ContasInMemoryDatabase {
  database = [new ContaCorrente('asas-aass51551', '123', 2, '1225'), new ContaPoupanca('e41155112-gff5555', '123', 1, '1224')];
}
