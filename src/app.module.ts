import { Module } from '@nestjs/common';
import { ApiModule } from './api/module';
import { DomainModule } from './domain/module';
import { EventHandlerModule } from './event-handler/module';

@Module({
  imports: [
    ApiModule,
    DomainModule,
    EventHandlerModule,
  ],
})
export class AppModule { }
