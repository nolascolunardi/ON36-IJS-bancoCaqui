import { ContasController } from '../contas.controller';
import { ContasService } from '../contas.service';
import { ContasRepository } from '../models/repository/contas.repository';
import { ContasFactory } from '../factories/contas.factory';
import { ContaCorrente } from '../models/entities/conta-corrente';
import { ContaPoupanca } from '../models/entities/conta-poupanca';
import { TipoConta } from '../enums/tipos-conta.enum';

let contaController: ContasController;
let contaService: ContasService;
let contaFactory: ContasFactory;
let contaRepository: ContasRepository;

beforeEach(() => {
  const databaseMock = {
    database: [new ContaCorrente('155', 1, '1554784', 122, 1), new ContaPoupanca('123', 2, '1245632', 200, 2)],
  };
  contaFactory = new ContasFactory();
  contaRepository = new ContasRepository(databaseMock);
  contaService = new ContasService(contaFactory, contaRepository);
  contaController = new ContasController(contaService);
});

describe('POST http://localhost:3000/contas/abrirConta', () => {
  test('Caso em que abre a conta com numero da conta e saldo valido', async () => {
    const result = contaController.abrirConta(TipoConta.CORRENTE, '155', 1, '1471471', 122);
    const novoCliente = new ContaCorrente('155', 1, '1471471', 122, 3);
    expect(result).toStrictEqual(novoCliente);
  });

  test('Caso em que tenta abrir um cliente com numero da conta inválido', async () => {
    const result = contaController.abrirConta(TipoConta.CORRENTE, '155', 1, '1554784', 100);
    const error = 'Conta já existente.';
    expect(result).toEqual(error);
  });
});

describe('DELETE http://localhost:3000/contas/fecharConta/:numeroConta', () => {
  test('Caso em que a conta é encontrada e deletada', async () => {
    const result = contaController.fecharConta('1554784');
    expect(result).toBe('Conta deletada com sucesso.');
  });
  test('Caso em que a conta não é encontrada', async () => {
    const result = contaController.fecharConta('155444');
    const error = 'Conta não encontrada.';
    expect(result).toEqual(error);
  });
});

describe('PATCH http://localhost:3000/contas/atualizar/tipoDeConta/:numeroConta/:tipoConta', () => {
  test('Caso em que a conta não é encontrada', async () => {
    const result = contaController.atualizarTipoDeConta('155444', TipoConta.POUPANCA);
    const error = 'Conta não encontrada.';
    expect(result).toEqual(error);
  });
});

describe('POST http://localhost:3000/contas/listarConta/:tipoConta', () => {
  test('Caso em que a lista retorna todas as contas correntes cadastrados', async () => {
    const result = contaController.listarContas(TipoConta.CORRENTE);
    expect(result).toHaveLength(1);
  });

  test('Caso em que a lista retorna todas as contas poupanças cadastrados', async () => {
    const result = contaController.listarContas(TipoConta.POUPANCA);
    expect(result).toHaveLength(1);
  });
});

describe('POST http://localhost:3000/contas/depositar/:numeroConta/:valor', () => {
  test('Caso em que a conta é encontrada e o valor é depositado', async () => {
    const result = contaController.depositar('1554784', 100);
    expect(result.saldo).toBe(222);
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = contaController.depositar('155444', 100);
    const error = 'Conta não encontrada.';
    expect(result).toEqual(error);
  });

  test('Caso em que o valor é inválido', async () => {
    const result = contaController.depositar('1554784', -100);
    const error = 'Valor inválido.';
    expect(result).toEqual(error);
  });
});

describe('POST http://localhost:3000/contas/sacar/:numeroConta/:valor', () => {
  test('Caso em que a conta é encontrada e o valor é sacado', async () => {
    const result = contaController.sacar('1554784', 100);
    expect(result.saldo).toBe(22);
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = contaController.sacar('155444', 100);
    const error = 'Conta não encontrada.';
    expect(result).toEqual(error);
  });

  test('Caso em que o valor é inválido', async () => {
    const result = contaController.sacar('1554784', -100);
    const error = 'Valor inválido.';
    expect(result).toEqual(error);
  });
});
