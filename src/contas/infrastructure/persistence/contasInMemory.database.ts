import { ContaCorrente } from '../../domain/contaCorrente.entity';
import { ContaPoupanca } from '../../domain/contaPoupanca.entity';

export class ContasInMemoryDatabase {
  database = [new ContaCorrente('123', 'lol1-kknmnn-llnn1', '1225'), new ContaPoupanca('123', 'jkseu-lindo1255-amo', '1224')];
}
