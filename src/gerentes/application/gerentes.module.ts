import { Module } from '@nestjs/common';
import { GerentesController } from '../presenter/http/gerentes.controller';
import { gerentesProviders } from './gerentes.providers';

@Module({
  providers: gerentesProviders,
  controllers: [GerentesController],
})
export class GerentesModule {}
