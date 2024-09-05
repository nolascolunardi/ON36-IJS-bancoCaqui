import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from '../../domain/cliente';
import { ClienteRepository } from '../ports/clientes.repository';
import { ClienteFactory } from '../../domain/factory/cliente.factory';
import { CriarClienteDto } from '../../presenter/http/dto/criar-cliente.dto';
import { CepValidador } from '../ports/cep-validador';

@Injectable()
export class ClienteService {
  constructor(
    private readonly clienteRepository: ClienteRepository,
    private readonly clienteFactory: ClienteFactory,
    private readonly cepValidador: CepValidador,
  ) {}

  async cadastrarCliente(criarClienteDto: CriarClienteDto): Promise<Cliente> {
    await this.cepValidador.validarCep(criarClienteDto.cep);
    this.validarCPF(criarClienteDto.cpf);
    this.validarEmail(criarClienteDto.email);

    const novoCliente = this.clienteFactory.criar(criarClienteDto);
    return this.clienteRepository.salvar(novoCliente);
  }

  validarCPF(cpf: string): void {
    const clientes = this.clienteRepository.listarTodos();
    const clienteExiste = clientes.find((cliente) => cliente.cpf === cpf);
    if (clienteExiste) {
      throw new ConflictException('CPF já cadastrado.');
    }
  }

  validarEmail(email: string): void {
    const clientes = this.clienteRepository.listarTodos();
    const clienteExiste = clientes.find((cliente) => cliente.email === email);
    if (clienteExiste) {
      throw new ConflictException('Email já cadastrado.');
    }
  }

  listarClientes(): Cliente[] {
    return this.clienteRepository.listarTodos();
  }

  deletarCliente(emailCliente: string): void {
    const index = this.buscarClientePorEmail(emailCliente);
    this.clienteRepository.deletar(index);
  }

  buscarClientePorEmail(emailCliente: string): number {
    const clientes = this.clienteRepository.listarTodos();
    const index = clientes.findIndex((cliente) => cliente.email === emailCliente);
    if (index === -1) {
      throw new NotFoundException('Cliente  não encontrado.');
    }
    return index;
  }
}
