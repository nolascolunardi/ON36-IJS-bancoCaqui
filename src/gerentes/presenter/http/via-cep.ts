import { CepValidador } from '../../application/ports/cep-validador';

export class ViaCep extends CepValidador {
  async validarCep(cep: string): Promise<boolean> {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      throw new Error('Erro ao buscar CEP');
    }

    const data = await response.json();
    if (data.erro) {
      throw new Error('CEP não encontrado');
    }

    if (data.localidade !== 'Mogi das Cruzes') {
      throw new Error('CEP inválido');
    }
    return true;
  }
}
