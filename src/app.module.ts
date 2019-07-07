import { Module } from '@nestjs/common';
import { ApiModule } from './api/module';
import { DomainModule } from './domain/module';

@Module({
  imports: [
    ApiModule,
    DomainModule
  ]
})
export class AppModule { }
