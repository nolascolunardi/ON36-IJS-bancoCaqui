import { Conta } from '../entities/contas';
import * as fs from 'fs';
import * as path from 'path';

export class ContasRepository {
  private readonly filePathContas = path.resolve('src/contas/data/contas.json');
  private idCounter: number;

  constructor() {
    const contas = this.readContas();
    this.idCounter = contas.length > 0 ? contas[contas.length - 1].idConta + 1 : 1;
  }
  private readContas(): Conta[] {
    const data = fs.readFileSync(this.filePathContas, 'utf-8');
    return JSON.parse(data) as Conta[];
  }
  private writeContas(contas: Conta[]): void {
    fs.writeFileSync(this.filePathContas, JSON.stringify(contas, null, 2), 'utf-8');
  }

  addConta(conta: Conta): void {
    conta.setIdConta(this.idCounter);
    const listaContas = this.readContas();
    listaContas.push(conta);
    this.writeContas(listaContas);
  }
}
