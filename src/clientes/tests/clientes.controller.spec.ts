import { ClientesController } from '../clientes.controller';
import { ClienteService } from '../clientes.service';
import { ClienteRepository } from '../models/repository/clientes.repository';
import { Cliente } from '../models/entity/cliente';

let clienteController: ClientesController;
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
  clienteController = new ClientesController(clienteService);
});

describe('POST http://localhost:3000/clientes/cadastrar', () => {
  test('Caso em que cadastra um cliente com email e cpf valido', async () => {
    const result = clienteController.cadastrarCliente('Joana', '147258147', 'joana@ex.com', '11968457784', 'Rua A, 10');
    const novoCliente = new Cliente('Joana', '147258147', 'joana@ex.com', '11968457784', 'Rua A, 10', 3);
    expect(result).toStrictEqual(novoCliente);
  });
});
