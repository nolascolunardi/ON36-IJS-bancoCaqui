import { Injectable } from '@nestjs/common';
import { ContasFactory } from './factories/contas.factory';
import { ContasRepository } from './models/repository/contas.repository';
import { TipoConta } from './enums/tipos-conta.enum';

@Injectable()
export class ContasService {
  constructor(
    private readonly contaFactory: ContasFactory,
    private readonly contaRepository: ContasRepository,
  ) {}

  openConta(tipoConta: TipoConta, registroGerente: string, idCliente: number, numeroConta: string, saldo: number) {
    try {
      const newConta = this.contaFactory.createConta(tipoConta, registroGerente, Number(idCliente), numeroConta, Number(saldo));
      this.contaRepository.addConta(newConta);
      return newConta;
    } catch (error) {
      return error.message;
    }
  }
}
