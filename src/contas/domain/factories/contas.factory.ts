import { Injectable } from '@nestjs/common';
import { Conta } from '../conta.entity';
import { ContaCorrente } from '../contaCorrente.entity';
import { ContaPoupanca } from '../contaPoupanca.entity';
import { TipoConta } from '../enums/tiposConta.enum';
import { AbrirContaDto } from '../../presenter/http/dto/abrirConta.dto';

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
