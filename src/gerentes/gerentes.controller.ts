import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TipoConta } from '../contas/contas.model';
import { Cliente } from '../clientes/clientes.model';
import { GerentesService } from './gerentes.service';

@Controller('gerentes')
export class GerentesController {

    constructor(private readonly GerentesService: GerentesService ) {}

    @Post('/clientes')
    createCliente(
        @Body('nome') nome: string,
        @Body('cpf') cpf: string, 
        @Body('email') email: string, 
        @Body('telefone')telefone: string, 
        @Body('dataNasc') dataNasc: string, 
        @Body('endereco') endereco: string
        ): Cliente {
            return this.GerentesService.createCliente(nome, cpf, email, telefone, dataNasc, endereco);
        }

    @Delete('/clientes/:id')
    removeCliente(@Param('id') id: number): void {
        return this.GerentesService.removeCliente(id);
    }

    @Post('cliente/criarConta')
    createConta(
        @Body('idCliente') idCliente: number,
        @Body('numeroConta') numeroConta: string,
        @Body('tipoConta') tipoConta: TipoConta,
        @Body('saldo') saldo: number
    ) {
        return this.GerentesService.createConta(idCliente, numeroConta, tipoConta, saldo);
    }
    

    // @Patch('cliente/alterarTipo/:idCliente')
    // updateTipoConta(
    //     @Param('idCliente') idCliente: number,
    //     @Body('tipoConta') tipoConta: TipoConta
    // ) {
    //     return this.GerentesService.updateTipo(idCliente, tipoConta);
    // }

    // @Patch('cliente/:idCliente')
    // closeConta(@Param('idCliente') idCliente: number): void {
    //     return this.GerentesService.closeConta(idCliente);
    // }

}
