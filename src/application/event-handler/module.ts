import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule, EventBus, RabbitMQBusAdapter } from '@kerthin/cqrs';
import { getPrototypes } from '@kerthin/utils';

const handlers = getPrototypes(`${__dirname}/handlers/*{.ts,.js}`);

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    ...handlers,
  ],
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
