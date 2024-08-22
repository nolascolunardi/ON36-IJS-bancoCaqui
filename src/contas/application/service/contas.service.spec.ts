import { ContasService } from './contas.service';
import { ContaCorrente } from '../../domain/conta-corrente';
import { ContaPoupanca } from '../../domain/conta-poupanca';
import { InMemoryContasRepository } from '../../infrastructure/persistence/in-memory.contas.repository';
import { ContasFactory } from '../factories/contas.factory';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';

let contasService: ContasService;
let contasFactory: ContasFactory;
let contasRepository: InMemoryContasRepository;

beforeEach(() => {
  const databaseMock = {
    database: [new ContaCorrente('155', 1, '1554784', 122, 1), new ContaPoupanca('123', 2, '1245632', 200, 2)],
  };
  contasRepository = new InMemoryContasRepository(databaseMock);
  contasFactory = new ContasFactory();
  contasService = new ContasService(contasFactory, contasRepository);
});

describe('Teste de abrir Conta', () => {
  test('Caso em que tenta abrir conta com numero de conta e saldo válido', async () => {
    const result = contasService.abrirConta(TipoConta.CORRENTE, '123', 1, '1234568', 100);
    const novoCliente = new ContaCorrente('123', 1, '1234568', 100, 3);
    expect(result).toEqual(novoCliente);
  });

  test('Caso em que tenta abrir um cliente com numero da conta inválido', async () => {
    const result = () => contasService.abrirConta(TipoConta.CORRENTE, '123', 1, '1554784', 100);
    expect(result).toThrow('Conta já existente.');
  });

  test('Caso em que tenta abrir um cliente com saldo inválido', async () => {
    const result = () => contasService.abrirConta(TipoConta.CORRENTE, '123', 1, '1421574', -1);
    expect(result).toThrow('Saldo inválido.');
  });
});

describe('Teste de validar Conta', () => {
  test('Caso em que o numero da Conta é valido', async () => {
    const result = contasService.validarConta('1584752');
    expect(result).toBe(true);
  });

  test('Caso em que o numero da Conta é invalido', async () => {
    const result = contasService.validarConta('1554784');
    expect(result).toBe(false);
  });
});

describe('Teste de fechar Conta', () => {
  test('Caso em que a conta é encontrada e deletada', async () => {
    const result = contasService.fecharConta('1554784');
    expect(result).toBe('Conta deletada com sucesso.');
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = () => contasService.fecharConta('155444');
    expect(result).toThrow('Conta não encontrada.');
  });
});

describe('Teste de atualizar Tipo de Conta', () => {
  test('Caso em que a conta é encontrada e atualizada para conta poupança', async () => {
    const result = contasService.atualizarTipoDeConta('1554784', TipoConta.POUPANCA);
    expect(result.tipoConta).toBe(TipoConta.POUPANCA);
  });

  test('Caso em que a conta é encontrada e atualizada para conta corrente', async () => {
    const result = contasService.atualizarTipoDeConta('1245632', TipoConta.CORRENTE);
    expect(result.tipoConta).toBe(TipoConta.CORRENTE);
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = () => contasService.atualizarTipoDeConta('155444', TipoConta.POUPANCA);
    expect(result).toThrow('Conta não encontrada.');
  });
});

describe('Teste de listar Contas', () => {
  test('Caso em que lista todas as contas', async () => {
    const result = contasService.listarContas();
    expect(result.length).toBe(2);
  });
});

describe('Teste de depositar', () => {
  test('Caso em que deposita um valor válido de uma conta existente', async () => {
    const result = contasService.depositar('1554784', 100);
    expect(result.getSaldo()).toBe(222);
  });

  test('Caso em que deposita um valor inválido', async () => {
    const result = () => contasService.depositar('1554784', -1);
    expect(result).toThrow('Valor inválido.');
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = () => contasService.depositar('155444', 100);
    expect(result).toThrow('Conta não encontrada.');
  });
});

describe('Teste de sacar', () => {
  test('Caso em que saca um valor válido de uma conta existente', async () => {
    const result = contasService.sacar('1554784', 100);
    expect(result.getSaldo()).toBe(22);
  });

  test('Caso em que saca um valor inválido', async () => {
    const result = () => contasService.sacar('1554784', -1);
    expect(result).toThrow('Valor inválido.');
  });

  test('Caso em que a conta não é encontrada', async () => {
    const result = () => contasService.sacar('155444', 100);
    expect(result).toThrow('Conta não encontrada.');
  });

  test('Caso em que o saldo é insuficiente', async () => {
    const result = () => contasService.sacar('1554784', 200);
    expect(result).toThrow('Saldo insuficiente.');
  });
});
