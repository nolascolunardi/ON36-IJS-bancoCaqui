import { Gerente } from '../../domain/gerente';

export class InMemoryGerenteDatabase {
  public database: Gerente[] = [new Gerente('12214714', 'Ana', '11958457754', 'ana@bancocaqui.com', '11958584752')];
}
