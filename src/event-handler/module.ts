import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule, EventBus, RabbitMQBusAdapter } from '@kerthin/cqrs';

import { TemplateCreatedEvent } from './handlers/template-created.event';

@Module({
  imports: [CqrsModule],
  providers: [TemplateCreatedEvent],
})
export class EventHandlerModule implements OnModuleInit {

  constructor(private readonly eventBus: EventBus) { }

  async onModuleInit() {
    const exchange = 'template';
    const service = 'template';
    const host = process.env.BUS_URL;

    await this.eventBus
      .setAdapter(new RabbitMQBusAdapter(exchange, host, service))
      .init()
  }

}
