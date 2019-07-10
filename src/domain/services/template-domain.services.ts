import { Injectable } from '@nestjs/common';
import { TemplateDomainEntity } from '../entities/template-domain.entity';
import { TemplateRepository } from '../../database/repositories/template.repository';

@Injectable()
export class TemplateDomainService {

  constructor(
    private readonly repository: TemplateRepository
  ) { }

  // TODO: implement EmitEvent from cqrs module
  async create(data: TemplateDomainEntity) {
    await this.repository.save(data);
    // ... business rule
    // ... emit event
    // ... response (it depends of the logic) return;
  }

  async findAll(): Promise<TemplateDomainEntity[]> {
    return this.repository.find();
  }

}
