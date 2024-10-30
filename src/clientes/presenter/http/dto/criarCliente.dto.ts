import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

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
  @Length(8, 8)
  senha: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 13)
  telefone: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;

  @IsNotEmpty()
  @IsString()
  registroGerente: string;
}
