import { IEventHandler, EventHandler } from '@kerthin/cqrs';
import { TemplateCreatedDto } from '../dtos/template-created.dto';

@EventHandler(TemplateCreatedDto)
export class TemplateCreatedEvent implements IEventHandler<TemplateCreatedDto> {

  handle(event: TemplateCreatedDto): void {
    console.log('event', event);
  }

}
