import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CriarGerenteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  registro: string;

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
  @Length(11, 13) //pode colocar 55 11 999999999 ou só 11 9999999999
  telefone: string;

  constructor(nome: string, registro: string, cpf: string, email: string, telefone: string) {
    this.nome = nome;
    this.registro = registro;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}
