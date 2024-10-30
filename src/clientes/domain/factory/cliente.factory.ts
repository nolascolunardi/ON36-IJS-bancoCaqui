import { Cliente } from '../cliente.entity';
import { CriarClienteDto } from '../../presenter/http/dto/criarCliente.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcryptjs';

export class ClienteFactory {
  public criar(clienteDto: CriarClienteDto): Cliente {
    const senha = bcrypt.hashSync(clienteDto.senha, 10);
    return new Cliente(
      randomUUID(),
      clienteDto.nome,
      clienteDto.cpf,
      clienteDto.email,
      senha,
      clienteDto.telefone,
      clienteDto.cep,
      clienteDto.registroGerente,
    );
  }
}
