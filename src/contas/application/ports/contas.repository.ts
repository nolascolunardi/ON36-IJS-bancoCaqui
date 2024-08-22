import { Conta } from '../../domain/contas';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';

export abstract class ContasRepository {
  abstract salvar(conta: Conta): Conta;
  abstract deletar(conta: Conta): void;
  abstract atualizarSaldo(conta: Conta): Conta;
  abstract atualizarTipo(conta: Conta, tipoConta: TipoConta): Conta;
  abstract listarTodas(): Conta[];
}
