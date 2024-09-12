import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CriarClienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 13) //pode colocar 55 11 999999999 ou só 11 9999999999
  telefone: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;

  @IsNotEmpty()
  @IsString()
  registroGerente: string;
}
