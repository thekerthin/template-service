import { Event } from '@kerthin/cqrs';
import { TemplateDomainEntity } from '../../domain/entities/template-domain.entity';

export class TemplateCreatedDto extends Event<TemplateDomainEntity> {
  data: TemplateDomainEntity;
  context: string = 'template';
  action: string = 'templateCreated';
}
