import { Injectable } from '@nestjs/common';
import { ContasFactory } from '../factories/contas.factory';
import { InMemoryContasRepository } from '../../infrastructure/persistence/in-memory.contas.repository';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';
import { Conta } from '../../domain/contas';

@Injectable()
export class ContasService {
  constructor(
    private readonly contaFactory: ContasFactory,
    private readonly contaRepository: InMemoryContasRepository,
  ) {}

  abrirConta(tipoConta: TipoConta, registroGerente: string, idCliente: number, numeroConta: string, saldo: number): Conta {
    if (!this.validarConta(numeroConta)) {
      throw new Error('Conta já existente.');
    }
    if (saldo <= 0) {
      throw new Error('Saldo inválido.');
    }

    const newConta = this.contaFactory.createConta(tipoConta, registroGerente, Number(idCliente), numeroConta, Number(saldo));
    this.contaRepository.salvar(newConta);
    return newConta;
  }

  validarConta(numeroConta: string): boolean {
    return !this.findContabyNumeroConta(numeroConta);
  }

  findContabyNumeroConta(numeroConta: string): Conta {
    const contas = this.contaRepository.listarTodas();
    return contas.find((conta) => conta.numeroConta === numeroConta);
  }

  fecharConta(numConta: string): string {
    const contas = this.contaRepository.listarTodas();
    const conta = contas.find((conta) => conta.numeroConta === numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }

    this.contaRepository.deletar(conta);
    return 'Conta deletada com sucesso.';
  }

  atualizarTipoDeConta(numConta: string, tipoConta: TipoConta): Conta {
    const conta = this.findContabyNumeroConta(numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }
    return this.contaRepository.atualizarTipo(conta, tipoConta);
  }

  listarContas(): Conta[] {
    return this.contaRepository.listarTodas();
  }

  depositar(numConta: string, valor: number): Conta {
    if (valor <= 0) {
      throw new Error('Valor inválido.');
    }

    const conta = this.findContabyNumeroConta(numConta);
    if (!conta) {
      throw new Error('Conta não encontrada.');
    }
    conta.depositar(valor);
    return this.contaRepository.atualizarSaldo(conta);
  }

  sacar(numConta: string, valor: number): Conta {
    if (valor <= 0) {
      throw new Error('Valor inválido.');
    }

    const conta = this.findContabyNumeroConta(numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }
    conta.sacar(valor);
    return this.contaRepository.atualizarSaldo(conta);
  }
}
