import { Cliente } from '../cliente.entity';
import { CriarClienteDto } from '../../presenter/http/dto/criarCliente.dto';
import { randomUUID } from 'crypto';

export class ClienteFactory {
  public criar(clienteDto: CriarClienteDto): Cliente {
    return new Cliente(
      randomUUID(),
      clienteDto.nome,
      clienteDto.cpf,
      clienteDto.email,
      clienteDto.telefone,
      clienteDto.cep,
      clienteDto.registroGerente,
    );
  }
}
