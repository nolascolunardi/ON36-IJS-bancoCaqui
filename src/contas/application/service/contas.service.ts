import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ContasFactory } from '../../domain/factories/contas.factory';
import { TipoConta } from '../../domain/enums/tiposConta.enum';
import { Conta } from '../../domain/conta.entity';
import { ContasRepository } from '../ports/contas.repository';
import { AbrirContaDto } from '../../presenter/http/dto/abrirConta.dto';
import { DepositarDto } from '../../presenter/http/dto/depositar.dto';
import { SacarDto } from '../../presenter/http/dto/sacar.dto';

@Injectable()
export class ContasService {
  constructor(
    private readonly contaFactory: ContasFactory,
    private readonly contaRepository: ContasRepository,
  ) {}

  async abrir(abrirContaDto: AbrirContaDto): Promise<Conta> {
    if (await this.contaRepository.buscarPorNumeroConta(abrirContaDto.numeroConta)) {
      throw new ForbiddenException('Conta já existe.');
    }

    const newConta = this.contaFactory.criar(abrirContaDto);
    return await this.contaRepository.salvar(newConta);
  }

  async fechar(numeroConta: string): Promise<string> {
    const conta = await this.verificarConta(numeroConta);
    await this.contaRepository.deletar(conta);
    return 'Conta deletada com sucesso.';
  }

  async atualizarTipoConta(numeroConta: string, tipoConta: TipoConta): Promise<Conta> {
    const conta = await this.verificarConta(numeroConta);
    return this.contaRepository.atualizarTipo(conta, tipoConta);
  }

  async listarTodas(): Promise<Conta[]> {
    return this.contaRepository.listarTodas();
  }

  async listaContasCliente(clienteId: string): Promise<Conta> {
    const conta = await this.contaRepository.buscarContasCliente(clienteId);
    if (!conta) {
      throw new NotFoundException('Conta não encontrada.');
    }
    return conta;
  }

  async depositar(numConta: string, depositarDto: DepositarDto): Promise<Conta> {
    const conta = await this.verificarConta(numConta);
    conta.depositar(depositarDto.valor);
    await this.contaRepository.atualizarSaldo(conta.id, conta.saldo);
    return conta;
  }

  async sacar(numConta: string, sacarDto: SacarDto): Promise<Conta> {
    const conta = await this.verificarConta(numConta);
    conta.sacar(sacarDto.valor);
    await this.contaRepository.atualizarSaldo(conta.id, conta.saldo);
    return conta;
  }

  async verificarConta(numeroConta: string): Promise<Conta> {
    const conta = await this.contaRepository.buscarPorNumeroConta(numeroConta);
    if (!conta) {
      throw new NotFoundException('Conta não encontrada.');
    }
    return conta;
  }
}
