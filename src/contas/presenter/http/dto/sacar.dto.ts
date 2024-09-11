import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class SacarDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  valor: number;
}
