import { Injectable, NotFoundException } from '@nestjs/common';
import { ContasFactory } from '../../domain/factories/contas.factory';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';
import { Conta } from '../../domain/contas';
import { ContasRepository } from '../ports/contas.repository';
import { AbrirContaDto } from '../../presenter/http/dto/abrir-conta.dto';
import { DepositarDto } from '../../presenter/http/dto/depositar.dto';
import { SacarDto } from '../../presenter/http/dto/sacar.dto';

@Injectable()
export class ContasService {
  constructor(
    private readonly contaFactory: ContasFactory,
    private readonly contaRepository: ContasRepository,
  ) {}

  async abrir(abrirContaDto: AbrirContaDto): Promise<Conta> {
    if (this.findContabyNumeroConta(abrirContaDto.numeroConta)) {
      throw new Error('Conta já existente.');
    }

    const newConta = this.contaFactory.criar(abrirContaDto);
    this.contaRepository.salvar(newConta);
    return newConta;
  }

  findContabyNumeroConta(numeroConta: string): Conta {
    const contas = this.contaRepository.listarTodas();
    return contas.find((conta) => conta.numeroConta === numeroConta);
  }

  validarConta(numeroConta: string): Conta {
    const conta = this.findContabyNumeroConta(numeroConta);
    if (!conta) {
      throw new NotFoundException('Conta não encontrada.');
    }
    return conta;
  }

  async fechar(numConta: string): Promise<string> {
    const conta = this.validarConta(numConta);
    this.contaRepository.deletar(conta);
    return 'Conta deletada com sucesso.';
  }

  async atualizarTipoConta(numConta: string, tipoConta: TipoConta): Promise<Conta> {
    const conta = this.validarConta(numConta);
    return this.contaRepository.atualizarTipo(conta, tipoConta);
  }

  listarTodas(): Conta[] {
    return this.contaRepository.listarTodas();
  }

  async depositar(numConta: string, depositarDto: DepositarDto): Promise<Conta> {
    const conta = this.validarConta(numConta);
    conta.depositar(depositarDto.valor);
    return this.contaRepository.atualizarSaldo(conta);
  }

  async sacar(numConta: string, sacarDto: SacarDto): Promise<Conta> {
    const conta = this.validarConta(numConta);
    conta.sacar(sacarDto.valor);
    return this.contaRepository.atualizarSaldo(conta);
  }
}
