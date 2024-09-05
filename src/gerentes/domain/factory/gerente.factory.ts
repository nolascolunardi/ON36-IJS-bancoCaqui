import { Gerente } from '../gerente';
import { CriarGerenteDto } from '../../presenter/http/dto/criar-gerente.dto';

export class GerenteFactory {
  criarGerente(gerenteDto: CriarGerenteDto): Gerente {
    return new Gerente(gerenteDto.registro, gerenteDto.nome, gerenteDto.cpf, gerenteDto.email, gerenteDto.telefone);
  }
}
