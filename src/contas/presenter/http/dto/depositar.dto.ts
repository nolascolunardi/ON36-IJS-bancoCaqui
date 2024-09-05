import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class DepositarDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  valor: number;
}
