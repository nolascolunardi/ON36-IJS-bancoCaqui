import { Module } from '@nestjs/common';
import { contasProviders } from './contas.providers';
import { ContasController } from '../presenter/http/contas.controller';
@Module({
  providers: contasProviders,
  controllers: [ContasController],
})
export class ContasModule {}
