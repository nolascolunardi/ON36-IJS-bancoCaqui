import { Gerente } from '../entity/gerente';
import * as fs from 'fs';
import * as path from 'path';

export class GerenteRepository {
  private readonly filePathGerente = path.resolve('src/gerentes/data/gerentes.json');
  private idCounter: number;

  constructor() {
    const gerentes = this.readGerentes();
    this.idCounter = gerentes.length > 0 ? gerentes[gerentes.length - 1].idGerente + 1 : 1;
  }

  private readGerentes(): Gerente[] {
    const data = fs.readFileSync(this.filePathGerente, 'utf-8');
    return JSON.parse(data) as Gerente[];
  }
  private writeGerentes(Gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePathGerente, JSON.stringify(Gerentes, null, 2), 'utf-8');
  }

  addGerente(gerente: Gerente): void {
    gerente.setId(this.idCounter);
    const listaGerentes = this.readGerentes();
    listaGerentes.push(gerente);
    this.writeGerentes(listaGerentes);
  }

  deletarGerente(registro: string): void {
    const listaGerentes = this.readGerentes();
    const index = this.findIndexByRegistro(registro, listaGerentes);
    if (index === -1) {
      throw new Error(`Gerente com resgistro não encontrado.`);
    }
    listaGerentes.splice(index, 1);
    this.writeGerentes(listaGerentes);
  }

  findIndexByRegistro(registro: string, listaGerentes: Gerente[]): number {
    return listaGerentes.findIndex((gerente) => gerente.registro === registro);
  }
}
