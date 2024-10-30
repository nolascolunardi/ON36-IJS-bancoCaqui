import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from '../../domain/cliente.entity';
import { ClienteRepository } from '../ports/clientes.repository';
import { ClienteFactory } from '../../domain/factory/cliente.factory';
import { CriarClienteDto } from '../../presenter/http/dto/criarCliente.dto';
import { CepValidador } from '../ports/cepValidador';

@Injectable()
export class ClienteService {
  constructor(
    private readonly clienteRepository: ClienteRepository,
    private readonly clienteFactory: ClienteFactory,
    private readonly cepValidador: CepValidador,
  ) {}

  async cadastrarCliente(criarClienteDto: CriarClienteDto): Promise<Cliente> {
    await this.cepValidador.validarCep(criarClienteDto.cep);
    await this.validarCPF(criarClienteDto.cpf);
    await this.validarEmail(criarClienteDto.email);

    const novoCliente = this.clienteFactory.criar(criarClienteDto);
    return this.clienteRepository.salvar(novoCliente);
  }

  async validarCPF(cpf: string): Promise<void> {
    const clienteExiste = await this.clienteRepository.buscarPorCPF(cpf);
    if (clienteExiste) {
      throw new ConflictException('CPF já cadastrado.');
    }
  }

  async validarEmail(email: string): Promise<void> {
    const clienteExiste = await this.clienteRepository.buscarPorEmail(email);
    if (clienteExiste) {
      throw new ConflictException('Email já cadastrado.');
    }
  }

  async listarClientes(): Promise<Cliente[]> {
    return await this.clienteRepository.listarTodos();
  }

  async buscarCliente(emailCliente: string): Promise<Cliente> {
    const cliente = await this.clienteRepository.buscarPorEmail(emailCliente);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado.');
    }
    return cliente;
  }

  async deletarCliente(emailCliente: string): Promise<void> {
    const cliente = await this.clienteRepository.buscarPorEmail(emailCliente);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado.');
    }
    await this.clienteRepository.deletar(cliente);
  }
}
