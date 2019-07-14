import { Injectable } from '@nestjs/common';
import { EmitEvent, EventBus } from '@kerthin/cqrs';
import { TemplateDomainEntity } from '../entities/template-domain.entity';
import { TemplateRepository } from '../../database/repositories/template.repository';

@Injectable()
export class TemplateDomainService {

  constructor(
    private readonly repository: TemplateRepository,
    private readonly eventBus: EventBus
  ) { }

  @EmitEvent({ context: 'template', action: 'templateCreated' })
  async create(data: TemplateDomainEntity) {
    await this.repository.save(data);
  }

  async findAll(): Promise<TemplateDomainEntity[]> {
    return this.repository.find();
  }

}
