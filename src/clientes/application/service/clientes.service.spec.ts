import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './clientes.service';
import { ClienteRepository } from '../../application/ports/clientes.repository';
import { CriarClienteDto } from '../../presenter/http/dto/criar-cliente.dto';
import { CepValidador } from '../ports/cep-validador';
import { Cliente } from '../../domain/cliente';
import { ClienteFactory } from '../../domain/factory/cliente.factory';

let service: ClienteService;
let mockClienteRepository: ClienteRepository;
let mockCepValidador: CepValidador;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      ClienteService,
      ClienteFactory,
      {
        provide: ClienteRepository,
        useValue: {
          salvar: jest.fn(),
          deletar: jest.fn(),
          listarTodos: jest.fn(),
        },
      },
      {
        provide: CepValidador,
        useValue: {
          validarCep: jest.fn(),
        },
      },
    ],
  }).compile();

  service = module.get<ClienteService>(ClienteService);
  mockCepValidador = module.get<CepValidador>(CepValidador);
  mockClienteRepository = module.get<ClienteRepository>(ClienteRepository);
});

const clienteTest = {
  nome: 'João',
  cpf: '358584571547',
  email: 'joao@ex.com',
  telefone: '11958475847',
  cep: '08700001',
} as Cliente;

describe('Teste de cadastrar Cliente', () => {
  test('Caso em que cadastra um cliente com email e CPF válidos', async () => {
    jest.spyOn(mockCepValidador, 'validarCep').mockReturnValue(true);
    jest.spyOn(mockClienteRepository, 'salvar').mockReturnValue(clienteTest);
    jest.spyOn(mockClienteRepository, 'listarTodos').mockReturnValue([]);

    const resultado = await service.cadastrarCliente(clienteTest as CriarClienteDto);

    expect(resultado).toEqual(clienteTest);
  });
});
