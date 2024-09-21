import { Module } from '@nestjs/common';
import { GerentesController } from '../presenter/http/gerentes.controller';
import { gerentesProviders } from './gerentes.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from '../domain/gerente.entity';

@Module({
  providers: gerentesProviders,
  imports: [TypeOrmModule.forFeature([Gerente])],
  controllers: [GerentesController],
  exports: gerentesProviders,
})
export class GerentesModule {}
