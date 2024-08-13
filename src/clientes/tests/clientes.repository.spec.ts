import { ClienteRepository } from '../models/repository/clientes.repository';
import { Cliente } from '../models/entity/cliente';

let clienteRepository: ClienteRepository;
beforeEach(() => {
  const databaseMock = {
    database: [
      new Cliente('João', '12345678900', 'joao@ex.com', '123456789', 'Rua A, 123', 1),
      new Cliente('Ana', '14714725836', 'ana@ex.com', '11968457784', 'Rua B, 456', 2),
    ],
  };
  clienteRepository = new ClienteRepository(databaseMock);
});

describe('Teste da função adicionarCliente ', () => {
  test('Teste de sucesso em adicionar cliente na lista', async () => {
    const cliente = new Cliente('Maria', '125489784512', 'maria@ex.com', '11968457784', 'Rua A, 22');
    clienteRepository.adicionarCliente(cliente);
    const result = clienteRepository.getAllClientes().length;
    expect(cliente.idCliente).toBe(3);
    expect(result).toBe(3);
  });
});

describe('Teste da função deletarCliente ', () => {
  test('Caso em que deleta cliente existente na lista', async () => {
    const index = clienteRepository.findIndexById(2);
    clienteRepository.deletarCliente(index);
    const result = clienteRepository.getAllClientes();

    expect(result).toHaveLength(1);
  });
});

describe('Teste da função getAllClientes ', () => {
  test('Teste de sucesso em retornar todos os clientes', async () => {
    const result = clienteRepository.getAllClientes();

    expect(result).toHaveLength(2);
  });
});

describe('Teste da função findIndexById ', () => {
  test('Teste de sucesso em encontrar índice de cliente pelo id', async () => {
    const idCliente = 1;
    const result = clienteRepository.findIndexById(idCliente);
    expect(result).toBe(0);
  });

  test('Teste de falha em encontrar índice de cliente pelo id', async () => {
    const idCliente = 6;
    const result = clienteRepository.findIndexById(idCliente);
    expect(result).toBe(-1);
  });
});
