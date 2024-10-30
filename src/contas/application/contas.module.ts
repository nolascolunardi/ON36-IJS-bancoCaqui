import { Module } from '@nestjs/common';
import { contasProviders } from './contas.providers';
import { ContasController } from '../presenter/http/contas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from '../domain/conta.entity';

@Module({
  providers: contasProviders,
  imports: [TypeOrmModule.forFeature([Conta])],
  controllers: [ContasController],
})
export class ContasModule {}
