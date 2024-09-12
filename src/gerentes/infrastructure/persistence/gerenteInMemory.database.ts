import { Gerente } from '../../domain/gerente.entity';

export class InMemoryGerenteDatabase {
  public database: Gerente[] = [new Gerente('a5s5a15-asa551155', '12214714', 'Ana', '11958457754', 'ana@bancocaqui.com', '11958584752')];
}
