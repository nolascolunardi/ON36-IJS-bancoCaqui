import { Injectable } from '@nestjs/common';
import { Conta } from '../contas';
import { ContaCorrente } from '../conta-corrente';
import { ContaPoupanca } from '../conta-poupanca';
import { TipoConta } from '../enums/tipos-conta.enum';
import { AbrirContaDto } from '../../presenter/http/dto/abrir-conta.dto';

@Injectable()
export class ContasFactory {
  public criar(abrirContaDto: AbrirContaDto): Conta {
    switch (abrirContaDto.tipoConta) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(abrirContaDto.registroGerente, abrirContaDto.idCliente, abrirContaDto.numeroConta);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(abrirContaDto.registroGerente, abrirContaDto.idCliente, abrirContaDto.numeroConta);
      default:
        throw new Error('Tipo de conta inválido');
    }
  }
}
