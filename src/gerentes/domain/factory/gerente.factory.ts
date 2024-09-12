import { Gerente } from '../gerente.entity';
import { CriarGerenteDto } from '../../presenter/http/dto/criarGerente.dto';
import { randomUUID } from 'crypto';

export class GerenteFactory {
  criar(gerenteDto: CriarGerenteDto): Gerente {
    return new Gerente(randomUUID(), gerenteDto.registro, gerenteDto.nome, gerenteDto.cpf, gerenteDto.email, gerenteDto.telefone);
  }
}
