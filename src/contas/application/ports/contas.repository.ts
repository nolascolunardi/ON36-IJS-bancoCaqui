import { Conta } from '../../domain/conta.entity';

export abstract class ContasRepository {
  abstract salvar(conta: Conta): Promise<Conta>;
  abstract deletar(conta: Conta): Promise<void>;
  abstract listarTodas(): Promise<Conta[]>;
  abstract atualizarSaldo(id: string, novoSaldo: number): Promise<void>;
  abstract atualizarTipo(conta: Conta, tipoConta: string): Promise<Conta>;
  abstract buscarContasCliente(clienteId: string): Promise<Conta | undefined>;
  abstract buscarPorNumeroConta(numeroConta: string): Promise<Conta | undefined>;
}
