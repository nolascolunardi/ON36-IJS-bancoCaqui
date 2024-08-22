import { GerentesController } from './gerentes.controller';
import { GerentesService } from '../../application/service/gerentes.service';
import { InMemoryRepository } from '../../infrastructure/persistence/in-memory.repository';
import { Gerente } from '../../domain/gerente';

let gerentesController: GerentesController;
let gerentesService: GerentesService;
let gerentesRepository: InMemoryRepository;

beforeEach(() => {
  const databaseMock = {
    database: [
      new Gerente('155', 'João', '12345678900', 'joao@bancocaqui.com', '123456789', '08710000', 1),
      new Gerente('123', 'Ana', '14714725836', 'ana@bancocaqui.com', '11968457784', '08710000', 2),
    ],
  };
  gerentesRepository = new InMemoryRepository(databaseMock);
  gerentesService = new GerentesService(gerentesRepository);
  gerentesController = new GerentesController(gerentesService);
});

describe('POST http://localhost:3000/gerentes/cadastrar', () => {
  test('Caso em que cadastra um gerente com registro, email e cpf valido', async () => {
    const result = gerentesController.cadastrarGerente('99', 'Joana', '147258147', 'joana@bancocaqui.com', '11968457784', '08710000');
    const novoGerente = new Gerente('99', 'Joana', '147258147', 'joana@bancocaqui.com', '11968457784', '08710000', 3);
    expect(result).toStrictEqual(novoGerente);
  });
});

describe('POST http://localhost:3000/gerentes/listar', () => {
  test('Caso em que a lista retorna os gerentes cadastrados', async () => {
    const result = gerentesController.listarGerentes();
    expect(result).toHaveLength(2);
  });
});

describe('DELETE http://localhost:3000/gerentes/deletar/:registro', () => {
  test('Caso em que deleta gerente existente na lista', async () => {
    const result = gerentesController.deletarGerente('155');
    expect(result).toBe('Gerente deletado com sucesso.');
  });
  test('Caso em que tenta deletar gerente inexistente na lista', async () => {
    const result = gerentesController.deletarGerente('154');
    const error = new Error('Gerente com registro 154 não encontrado.');
    expect(result).toStrictEqual(error);
  });
});
