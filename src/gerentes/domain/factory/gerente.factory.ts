import { Gerente } from '../gerente.entity';
import { CriarGerenteDto } from '../../presenter/http/dto/criarGerente.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcryptjs';

export class GerenteFactory {
  async criar(gerenteDto: CriarGerenteDto): Promise<Gerente> {
    const senha = await bcrypt.hash(gerenteDto.senha, 10);
    return new Gerente(randomUUID(), gerenteDto.registro, gerenteDto.nome, gerenteDto.cpf, gerenteDto.email, senha, gerenteDto.telefone);
  }
}
