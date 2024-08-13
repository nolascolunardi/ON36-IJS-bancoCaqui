import { GerentesRepository } from '../models/repository/gerentes.repository';
import { Gerente } from '../models/entity/gerente';

let gerenteRepository: GerentesRepository;
beforeEach(() => {
  const databaseMock = {
    database: [new Gerente('155', 'Joao', '58258474114', 'joao@bancocaqui.com', 'Rua A, 123', 1)],
  };
  gerenteRepository = new GerentesRepository(databaseMock);
});

describe('Teste da função adicionarGerente ', () => {
  test('Teste de sucesso em adicionar novo gerente na lista', async () => {
    const novoGerente = new Gerente('144', 'Maria', '122222222', 'maria@bancocaqui.com', '11988888874');
    gerenteRepository.adicionarGerente(novoGerente);
    const result = gerenteRepository.getAllGerentes().length;
    expect(novoGerente.idGerente).toBe(2);
    expect(result).toBe(2);
  });
});

describe('Teste da função deletarGerente ', () => {
  test('Caso em que deleta gerente existente na lista', async () => {
    const index = gerenteRepository.findIndexByRegistro('155');
    gerenteRepository.deletarGerente(index);
    const result = gerenteRepository.getAllGerentes();
    expect(result).toHaveLength(0);
  });
});

describe('Teste da função getAllGerentes ', () => {
  test('Caso de sucesso em retornar todos os gerentes', async () => {
    const result = gerenteRepository.getAllGerentes();
    expect(result).toHaveLength(1);
  });
});

describe('Teste da função findIndexByRegistro ', () => {
  test('Teste de sucesso em encontrar índice de gerente pelo registro', async () => {
    const registro = '155';
    const result = gerenteRepository.findIndexByRegistro(registro);
    expect(result).toBe(0);
  });

  test('Caso de falha em encontrar índice de gerente pelo registro', async () => {
    const registro = '154';
    const result = gerenteRepository.findIndexByRegistro(registro);
    expect(result).toBe(-1);
  });
});
