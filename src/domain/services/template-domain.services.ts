import { Injectable } from '@nestjs/common';
import { TemplateDomainEntity } from '../entities/template-domain.entity';
import { TemplateRepository } from '../../database/repositories/template.repository';

@Injectable()
export class TemplateDomainService {

  constructor(
    private readonly repository: TemplateRepository
  ) { }

  // TODO: implement EmitEvent from cqrs module
  create() {
    // ... business rule
    // ... emit event
    // ... response (it depends of the logic) return;
  }

  async findAll(data: any): Promise<TemplateDomainEntity[]> {
    return this.repository.find();
  }

}
