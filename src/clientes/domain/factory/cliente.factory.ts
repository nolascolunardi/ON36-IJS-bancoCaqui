import { Cliente } from '../cliente';
import { CriarClienteDto } from '../../presenter/http/dto/criar-cliente.dto';

export class ClienteFactory {
  public criar(clienteDto: CriarClienteDto): Cliente {
    return new Cliente(clienteDto.nome, clienteDto.cpf, clienteDto.email, clienteDto.telefone, clienteDto.cep);
  }
}
