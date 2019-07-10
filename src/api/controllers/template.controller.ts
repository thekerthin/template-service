import { Controller, Get, Post, Body } from '@nestjs/common';
import { TemplateService } from '../services/template.service';
import { TemplateDomainEntity } from 'domain/entities/template-domain.entity';
import { IFindAll } from 'api/utils/interfaces/find-all.interface';
import { CreateTemplateDto } from 'api/dtos/create-template.dto';

@Controller('templates')
export class TemplateController {

  constructor(private readonly service: TemplateService) { }

  @Post()
  create(@Body() template: CreateTemplateDto) {
    this.service.create(template);
  }

  @Get()
  findAll(): Promise<IFindAll<TemplateDomainEntity>> {
    return this.service.findAll();
  }

}
