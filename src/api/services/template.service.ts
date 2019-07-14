import { Injectable } from '@nestjs/common';
import { TemplateDomainService } from '../../domain/services/template-domain.services';
import { TemplateDomainEntity } from '../../domain/entities/template-domain.entity';
import { IFindAll } from '../utils/interfaces/find-all.interface';
import { CreateTemplateDto } from '../dtos/create-template.dto';
import { findAll } from '../utils/restful';

@Injectable()
export class TemplateService {

  constructor(private readonly domain: TemplateDomainService) { }

  async create(template: CreateTemplateDto) {
    return this.domain.create(<TemplateDomainEntity>template);
  }

  async findAll(): Promise<IFindAll<TemplateDomainEntity>> {
    const data = await this.domain.findAll();
    const page = 1;
    const limit = 10;
    const total = 100;

    return findAll<TemplateDomainEntity>({ data, page, limit, total });
  }

}
