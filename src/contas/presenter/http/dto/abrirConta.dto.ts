import { IsNotEmpty, IsString } from 'class-validator';

export class AbrirContaDto {
  @IsNotEmpty()
  @IsString()
  tipoConta: string;

  @IsNotEmpty()
  @IsString()
  registroGerente: string;

  @IsNotEmpty()
  @IsString()
  idCliente: string;

  @IsNotEmpty()
  @IsString()
  numeroConta: string;
}
