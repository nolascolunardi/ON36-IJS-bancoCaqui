import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AbrirContaDto {
  @IsNotEmpty()
  @IsString()
  tipoConta: string;

  @IsNotEmpty()
  @IsString()
  registroGerente: string;

  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsString()
  numeroConta: string;
}
