import { GerentesService } from '../gerentes.service';
import { GerentesRepository } from '../models/repository/gerentes.repository';
import { Gerente } from '../models/entity/gerente';

let gerenteService: GerentesService;
let gerenteRepository: GerentesRepository;

beforeEach(() => {
  const databaseMock = {
    database: [
      new Gerente('155', 'João', '12345678900', 'joao@bancocaqui.com', '123456789', 1),
      new Gerente('123', 'Ana', '14714725836', 'ana@bancocaqui.com', '11968457784', 2),
    ],
  };
  gerenteRepository = new GerentesRepository(databaseMock);
  gerenteService = new GerentesService(gerenteRepository);
});

describe('Teste de cadastrar Gerente', () => {
  test('Caso em que cadastra um gerente com registro, email e cpf valido', async () => {
    const result = gerenteService.cadastrarGerente('144', 'Joana', '147258147', 'joana@bancocaqui.com', '11968457784');
    const novoGerente = new Gerente('144', 'Joana', '147258147', 'joana@bancocaqui.com', '11968457784', 3);
    expect(result).toStrictEqual(novoGerente);
  });

  test('Caso em que tenta cadastrar um gerente com registro já cadastrado', async () => {
    const result = () => gerenteService.cadastrarGerente('123', 'Joana', '12345678140', 'joana@bancocaqui.com', '11968457784');
    expect(result).toThrow('Registro inválido.');
  });

  test('Caso em que tenta cadastrar um gerente com cpf já cadastrado', async () => {
    const result = () => gerenteService.cadastrarGerente('99', 'Joana', '12345678900', 'joana@bancocaqui.com', '11968457784');
    expect(result).toThrow('CPF já cadastrado.');
  });

  test('Caso em que tenta cadastrar um gerente com email já cadastrado', async () => {
    const result = () => gerenteService.cadastrarGerente('99', 'Joana', '12345655991', 'ana@bancocaqui.com', '11968457784');
    expect(result).toThrow('Email já cadastrado.');
  });
});

describe('Teste de validar CPF', () => {
  test('Caso em que o CPF é valido', async () => {
    const result = gerenteService.validarCPF('158475694512');
    expect(result).toBe(true);
  });

  test('Caso em que o CPF é invalido', async () => {
    const result = gerenteService.validarCPF('12345678900');
    expect(result).toBe(false);
  });
});

describe('Teste de validar Email', () => {
  test('Caso em que o email é valido', async () => {
    const result = gerenteService.validarEmail('julia@ex.com');
    expect(result).toBe(true);
  });

  test('Caso em que o email é invalido', async () => {
    const result = gerenteService.validarEmail('ana@bancocaqui.com');
    expect(result).toBe(false);
  });
});

describe('Teste de listar Gerentes', () => {
  test('Caso em que lista todos os gerentes', async () => {
    const result = gerenteService.listarGerentes();
    expect(result).toHaveLength(2);
  });
});

describe('Teste de deletar Gerente', () => {
  test('Caso em que deleta um gerente existente na lista', async () => {
    gerenteService.deletarGerente('123');
    const result = gerenteService.listarGerentes();
    expect(result).toHaveLength(1);
  });

  test('Caso em que deleta um gerente não existente na lista', async () => {
    const result = () => gerenteService.deletarGerente('99');
    expect(result).toThrow('Gerente com registro 99 não encontrado.');
  });
});
