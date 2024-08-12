import { ContasRepository } from '../models/repository/contas.repository';
import { ContaCorrente } from '../models/entities/conta-corrente';
import { ContaPoupanca } from '../models/entities/conta-poupanca';
import { TipoConta } from '../enums/tipos-conta.enum';

let contaRepository: ContasRepository;

beforeEach(() => {
  const databaseMock = {
    database: [new ContaCorrente('155', 1, '1554784', 122, 1), new ContaPoupanca('123', 2, '1245632', 200, 2)],
  };
  contaRepository = new ContasRepository(databaseMock);
});

describe('Teste da função adicionarConta ', () => {
  test('Caso de sucesso em adicionar conta corrente', async () => {
    const conta = new ContaCorrente('155', 3, '1554784', 122);
    contaRepository.adicionarConta(conta);
    const result = contaRepository.getAllContas(TipoConta.CORRENTE).length;
    expect(conta.idConta).toBe(3);
    expect(result).toBe(2);
  });

  test('Caso de sucesso em adicionar conta poupança', async () => {
    const conta = new ContaPoupanca('155', 3, '1554784', 122);
    contaRepository.adicionarConta(conta);
    const result = contaRepository.getAllContas(TipoConta.POUPANCA).length;
    expect(conta.idConta).toBe(3);
    expect(result).toBe(2);
  });
});

describe('Teste da função deletarConta', () => {
  test('Caso de sucesso em deletar conta', async () => {
    const conta = contaRepository.findContabyNumeroConta('1554784');
    contaRepository.deletarConta(conta);
    const result = contaRepository.getAllContas(TipoConta.CORRENTE).length;
    expect(conta.getStatus()).toBe(false);
    expect(result).toBe(1);
  });
});

describe('Teste da função atualizarTipoDeConta', () => {
  test('Caso de sucesso em atualizar tipo de conta de corrente para conta poupanca', async () => {
    const conta = contaRepository.findContabyNumeroConta('1554784');
    const result = contaRepository.atualizarTipoDeConta(conta, TipoConta.POUPANCA);
    expect(result.tipoConta).toBe(TipoConta.POUPANCA);
  });

  test('Caso de sucesso em atualizar tipo de conta de poupanca para conta corrente', async () => {
    const conta = contaRepository.findContabyNumeroConta('1245632');
    const result = contaRepository.atualizarTipoDeConta(conta, TipoConta.CORRENTE);
    expect(result.tipoConta).toBe(TipoConta.CORRENTE);
  });
});

describe('Teste da função findContabyNumeroConta', () => {
  test('Caso de sucesso em encontrar conta', async () => {
    const result = contaRepository.findContabyNumeroConta('1554784');
    expect(result.numeroConta).toBe('1554784');
  });

  test('Caso de falha em encontrar conta', async () => {
    const result = contaRepository.findContabyNumeroConta('2225554');
    expect(result).toBeUndefined();
  });
});

describe('Teste da função getAllContas', () => {
  test('Caso de sucesso em listar contas corrente', async () => {
    const result = contaRepository.getAllContas(TipoConta.CORRENTE);
    expect(result.length).toBe(1);
  });

  test('Caso de sucesso em listar contas poupanca', async () => {
    const result = contaRepository.getAllContas(TipoConta.POUPANCA);
    expect(result.length).toBe(1);
  });
});

describe('Teste da função depositar', () => {
  test('Caso de sucesso em depositar', async () => {
    const conta = contaRepository.findContabyNumeroConta('1554784');
    const result = contaRepository.depositar(conta, 100);
    expect(result.getSaldo()).toBe(222);
  });
});

describe('Teste da função sacar', () => {
  test('Caso de sucesso em sacar', async () => {
    const conta = contaRepository.findContabyNumeroConta('1554784');
    const result = contaRepository.sacar(conta, 100);
    expect(result.getSaldo()).toBe(22);
  });
});
