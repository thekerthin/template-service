import { Controller, Get } from '@nestjs/common';
import { TemplateService } from '../services/template.service';
import { TemplateDomainEntity } from 'domain/entities/template-domain.entity';
import { IFindAll } from 'api/utils/interfaces/find-all.interface';

@Controller('templates')
export class TemplateController {
  constructor(private readonly service: TemplateService) {}

  @Get()
  findAll(): Promise<IFindAll<TemplateDomainEntity>> {
    return this.service.findAll();
  }
}
