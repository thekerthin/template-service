import { Module, Global, OnModuleInit } from '@nestjs/common';
import { CqrsModule, EventBus, RabbitMQBusAdapter } from '@kerthin/cqrs';

import { DBModule } from '../database/module';
import { TemplateDomainService } from './services/template-domain.services';

@Global()
@Module({
  imports: [DBModule, CqrsModule],
  providers: [TemplateDomainService],
  exports: [TemplateDomainService],
})
export class DomainModule implements OnModuleInit {

  constructor(private readonly eventBus: EventBus) { }

  async onModuleInit() {
    const exchange = 'template';
    const service = 'template-domain-service';
    const host = process.env.BUS_URL;

    await this.eventBus
      .setAdapter(new RabbitMQBusAdapter(exchange, host, service))
      .init()
  }

}
