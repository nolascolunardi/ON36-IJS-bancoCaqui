export abstract class CepValidador {
  abstract validarCep(cep: string): Promise<boolean>;
}
