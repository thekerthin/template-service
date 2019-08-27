import { Injectable } from '@nestjs/common';
import { applyPaginationDefaults, wrapPaginatedResponse, PaginationResponse } from '@kerthin/utils';
import TemplateDomainService from '@domain/services/template-domain.services';
import { TemplateDomainEntity } from '@domain/entities/template-domain.entity';
import { CreateTemplateDto } from '../dtos/create-template.dto';

@Injectable()
export default class TemplateService {

  constructor(private readonly domain: TemplateDomainService) { }

  async create(template: CreateTemplateDto) {
    return this.domain.create(<TemplateDomainEntity>template);
  }

  findAll(options = {}): Promise<PaginationResponse<TemplateDomainEntity>> {
    return this.domain.findAll(applyPaginationDefaults(options))
      .then(wrapPaginatedResponse);
  }

}
