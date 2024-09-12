import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CriarGerenteDto {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  registro: string;

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
}
