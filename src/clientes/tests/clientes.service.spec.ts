import { ClienteService } from '../clientes.service';
import { Cliente } from '../models/entity/cliente';
import { ClienteRepository } from '../models/repository/clientes.repository';

let clienteService: ClienteService;
let clienteRepository: ClienteRepository;

beforeEach(() => {
  const databaseMock = {
    database: [
      new Cliente('João', '12345678900', 'joao@ex.com', '123456789', 'Rua A, 123', 1),
      new Cliente('Ana', '14714725836', 'ana@ex.com', '11968457784', 'Rua B, 456', 2),
    ],
  };
  clienteRepository = new ClienteRepository(databaseMock);
  clienteService = new ClienteService(clienteRepository);
});

describe('Teste de cadastrar Cliente', () => {
  test('Caso em que cadastra um cliente com email e cpf valido', async () => {
    const result = clienteService.cadastrarCliente('Joana', '147258147', 'joana@ex.com', '11968457784', 'Rua A, 10');
    const novoCliente = new Cliente('Joana', '147258147', 'joana@ex.com', '11968457784', 'Rua A, 10', 3);
    expect(result).toStrictEqual(novoCliente);
  });

  test('Caso em que tenta cadastrar um cliente com cpf já cadastrado', async () => {
    const result = () => clienteService.cadastrarCliente('Joana', '12345678900', 'joana@ex.com', '11968457784', 'Rua A, 10');
    expect(result).toThrow('CPF já cadastrado.');
  });

  test('Caso em que tenta cadastrar um cliente com email já cadastrado', async () => {
    const result = () => clienteService.cadastrarCliente('Joana', '12345655991', 'ana@ex.com', '11968457784', 'Rua A, 10');
    expect(result).toThrow('Email já cadastrado.');
  });
});

describe('Teste de validar CPF', () => {
  test('Caso em que o CPF é valido', async () => {
    const result = clienteService.validarCPF('158475694512');
    expect(result).toBe(true);
  });

  test('Caso em que o CPF é invalido', async () => {
    const result = clienteService.validarCPF('12345678900');
    expect(result).toBe(false);
  });
});

describe('Teste de validar Email', () => {
  test('Caso em que o email é valido', async () => {
    const result = clienteService.validarEmail('julia@ex.com');
    expect(result).toBe(true);
  });

  test('Caso em que o email é invalido', async () => {
    const result = clienteService.validarEmail('ana@ex.com');
    expect(result).toBe(false);
  });
});

describe('Teste de listar Clientes', () => {
  test('Caso em que lista todos os clientes', async () => {
    const result = clienteService.listarClientes();
    expect(result).toHaveLength(2);
  });
});

describe('Teste de deletar Cliente', () => {
  test('Caso em que deleta um cliente existente na lista', async () => {
    clienteService.deletarCliente(2);
    const result = clienteService.listarClientes();
    expect(result).toHaveLength(1);
  });

  test('Caso em que deleta um cliente não existente na lista', async () => {
    const result = () => clienteService.deletarCliente(6);
    expect(result).toThrow('Cliente com id 6 não encontrado.');
  });
});
