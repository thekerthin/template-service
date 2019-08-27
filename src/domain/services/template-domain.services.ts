import { Injectable } from '@nestjs/common';
import { EmitEvent, EventBus } from '@kerthin/cqrs';
import { toPaginatedResult, PaginationResult } from '@kerthin/utils';
import TemplateRepository from '@infrastructure/database/repositories/template.repository';
import { TemplateDomainEntity } from '../entities/template-domain.entity';

@Injectable()
export default class TemplateDomainService {

  constructor(
    private readonly repository: TemplateRepository,
    private readonly eventBus: EventBus
  ) { }

  @EmitEvent({ context: 'template', action: 'templateCreated' })
  async create(data: TemplateDomainEntity) {
    await this.repository.save(data);
  }

  async findAll(options): Promise<PaginationResult<TemplateDomainEntity>> {
    return this.repository.findAndCount()
      .then(toPaginatedResult(options));
  }

}
