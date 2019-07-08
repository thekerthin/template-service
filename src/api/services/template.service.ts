import { Injectable } from '@nestjs/common';
import { TemplateDomainService } from '../../domain/services/template-domain.services';
import { TemplateDomainEntity } from '../../domain/entities/template-domain.entity';
import { IFindAll } from 'api/utils/interfaces/find-all.interface';
import { findAll } from '../utils/restful';

@Injectable()
export class TemplateService {
  constructor(private readonly domain: TemplateDomainService) { }

  async findAll(): Promise<IFindAll<TemplateDomainEntity>> {
    const data = await this.domain.findAll({ name: 'ahabsdkasbkasbkjsabd' });
    const page = 1;
    const limit = 10;
    const total = 100;

    return findAll<TemplateDomainEntity>({ data, page, limit, total });
  }
}
