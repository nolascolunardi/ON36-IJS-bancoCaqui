import { Injectable } from '@nestjs/common';
import { ContasFactory } from './factories/contas.factory';
import { ContasRepository } from './models/repository/contas.repository';
import { TipoConta } from './enums/tipos-conta.enum';
import { Conta } from './models/entities/contas';

@Injectable()
export class ContasService {
  constructor(
    private readonly contaFactory: ContasFactory,
    private readonly contaRepository: ContasRepository,
  ) {}

  abrirConta(tipoConta: TipoConta, registroGerente: string, idCliente: number, numeroConta: string, saldo: number): Conta {
    if (!this.validarConta(numeroConta)) {
      throw new Error('Conta já existente.');
    }
    if (saldo <= 0) {
      throw new Error('Saldo inválido.');
    }

    const newConta = this.contaFactory.createConta(tipoConta, registroGerente, Number(idCliente), numeroConta, Number(saldo));
    this.contaRepository.adicionarConta(newConta);
    return newConta;
  }

  validarConta(numeroConta: string): boolean {
    return !this.contaRepository.findContabyNumeroConta(numeroConta);
  }

  fecharConta(numConta: string): string {
    const conta = this.contaRepository.findContabyNumeroConta(numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }

    this.contaRepository.deletarConta(conta);
    return 'Conta deletada com sucesso.';
  }

  atualizarTipoDeConta(numConta: string, tipoConta: TipoConta): Conta {
    const conta = this.contaRepository.findContabyNumeroConta(numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }

    return this.contaRepository.atualizarTipoDeConta(conta, tipoConta);
  }

  listarContas(tipoConta: TipoConta): Conta[] {
    return this.contaRepository.getAllContas(tipoConta);
  }

  depositar(numConta: string, valor: number): Conta {
    if (valor <= 0) {
      throw new Error('Valor inválido.');
    }

    const conta = this.contaRepository.findContabyNumeroConta(numConta);
    if (!conta) {
      throw new Error('Conta não encontrada.');
    }

    return this.contaRepository.depositar(conta, valor);
  }

  sacar(numConta: string, valor: number): Conta {
    if (valor <= 0) {
      throw new Error('Valor inválido.');
    }

    const conta = this.contaRepository.findContabyNumeroConta(numConta);

    if (!conta) {
      throw new Error('Conta não encontrada.');
    }

    if (conta.getSaldo() < valor) {
      throw new Error('Saldo insuficiente.');
    }

    return this.contaRepository.sacar(conta, valor);
  }
}
