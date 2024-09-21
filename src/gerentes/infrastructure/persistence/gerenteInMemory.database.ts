import { Gerente } from '../../domain/gerente.entity';

export class InMemoryGerenteDatabase {
  public database: Gerente[] = [
    new Gerente('dlllfd55-dsdssd', '12345678', 'nono', '30000000144', 'ana@bancocaqui.com', 'ana12345', '11999999999'),
  ];
}
