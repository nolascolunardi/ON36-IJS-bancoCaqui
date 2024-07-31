import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cliente } from '../clientes/clientes.model';
import { Conta } from '../contas/contas.model';
import { TipoConta } from '../contas/contas.model';

@Injectable()
export class GerentesService {
  private readonly filePathCliente = path.resolve('src/clientes/clientes.json');
  private readonly filePathConta = path.resolve('src/contas/contas.json');

  private readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePathCliente, 'utf-8');
    return JSON.parse(data) as Cliente[];
  }
  private writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(
      this.filePathCliente,
      JSON.stringify(clientes, null, 2),
      'utf-8',
    );
  }
  private readContas(): Conta[] {
    const data = fs.readFileSync(this.filePathConta, 'utf-8');
    return JSON.parse(data) as Conta[];
  }
  private writeContas(contas: Conta[]): void {
    fs.writeFileSync(
      this.filePathConta,
      JSON.stringify(contas, null, 2),
      'utf-8',
    );
  }

  // requisitos relacionado a clientes
  createCliente(
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    dataNasc: string,
    endereco: string,
  ): Cliente {
    const usuarios = this.readClientes();
    const newCliente = {
      idCliente:
        usuarios.length > 0 ? usuarios[usuarios.length - 1].idCliente + 1 : 1,
      nome,
      cpf,
      email,
      telefone,
      dataNasc,
      endereco,
    };
    usuarios.push(newCliente);
    this.writeClientes(usuarios);
    return newCliente;
  }

  removeCliente(id: number): void {
    const clientes = this.readClientes();
    const index = clientes.findIndex(
      (cliente) => cliente.idCliente === Number(id),
    );

    if (index === -1) {
      console.log(`Cliente com o id ${id} não encontrado.`);
    }

    clientes.splice(index, 1);
    console.log(`Cliente com o id ${id} removido com sucesso.`);
    this.writeClientes(clientes);
  }

  // requisitos relacionado a cont
  createConta(
    idCliente: number,
    numeroConta: string,
    tipoConta: TipoConta,
    saldo: number,
  ): Conta {
    const cliente = this.findByIdCliente(idCliente);
    const contas = this.readContas();

    if (!cliente) {
      return;
    }

    const newConta = {
      idCliente,
      idConta: contas.length > 0 ? contas[contas.length - 1].idConta + 1 : 1,
      numeroConta,
      tipoConta,
      status: true,
      saldo,
    };
    contas.push(newConta);
    this.writeContas(contas);
    return newConta;
  }

  updateTipo(idCliente: number, newTipo: TipoConta): Conta {
    const contas = this.readContas();
    const conta = contas.find((conta) => conta.idCliente === Number(idCliente));

    if (!conta) {
      console.log(`Conta com o id ${idCliente} não encontrada.`);
    }

    conta.tipoConta = newTipo;
    this.writeContas(contas);
    return conta;
  }

  closeConta(id: number): void {
    const contas = this.readContas();
    const contaIndex = contas.findIndex(
      (contas) => contas.idCliente === Number(id),
    );

    if (contaIndex === -1) {
      console.log(`Conta com o id ${id} não encontrada.`);
    }

    contas.splice(contaIndex, 1);
    console.log(`Conta com o id ${id} removida com sucesso.`);
    this.writeContas(contas);
  }

  findByIdCliente(id: number): Cliente {
    const clientes = this.readClientes();
    const cliente = clientes.find(
      (cliente) => cliente.idCliente === Number(id),
    );

    if (!cliente) {
      console.log(`Cliente com o id ${id} não encontrado.`);
    }
    return cliente;
  }
}
