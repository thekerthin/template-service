import { Injectable } from '@nestjs/common';
import { TemplateDomainEntity } from '../entities/template-domain.entity';
import { EmitEvent } from '../../shared/decorator';
import { TemplateRepository } from '../../database/repositories/template.repository';

@Injectable()
export class TemplateDomainService {

  constructor(private readonly repository: TemplateRepository) { }

  // TODO: evaluate if we can emit an event with an annotation - check this whether works ;)
  create() {
    // ... business rule
    // ... emit event
    // ... response (it depends of the logic) return;
  }

  @EmitEvent({})
  async findAll(data: any): Promise<TemplateDomainEntity[]> {
    return this.repository.find();
  }

}
