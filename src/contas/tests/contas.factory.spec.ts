import { ContasFactory } from '../factories/contas.factory';
import { ContaCorrente } from '../models/entities/conta-corrente';
import { TipoConta } from '../enums/tipos-conta.enum';
import { ContaPoupanca } from '../models/entities/conta-poupanca';

describe('Teste da funçao createConta de ContasFactory', () => {
  const contasFactory = new ContasFactory();

  test('Caso em que o tipo de conta é corrente', async () => {
    const result = contasFactory.createConta(TipoConta.CORRENTE, '123', 1, '1234568', 100);
    const conta = new ContaCorrente('123', 1, '1234568', 100);
    expect(result).toEqual(conta);
  });

  test('Caso em que o tipo de conta é poupança', async () => {
    const result = contasFactory.createConta(TipoConta.POUPANCA, '123', 1, '1234568', 100);
    const conta = new ContaPoupanca('123', 1, '1234568', 100);
    expect(result).toEqual(conta);
  });

  test('Caso em que o tipo de conta é inválido', async () => {
    const result = () => contasFactory.createConta(null, '123', 1, '1234568', 100);
    expect(result).toThrow('Tipo de conta inválido');
  });
});
