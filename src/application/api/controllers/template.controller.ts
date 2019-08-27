import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { PaginationResponse } from '@kerthin/utils';
import TemplateService from '../services/template.service';
import { TemplateDomainEntity } from '../../../domain/entities/template-domain.entity';
import { CreateTemplateDto } from '../dtos/create-template.dto';

@ApiUseTags('templates')
@Controller('templates')
export default class TemplateController {

  constructor(private readonly service: TemplateService) { }

  @Post()
  create(@Body() template: CreateTemplateDto) {
    this.service.create(template);
  }

  @Get()
  findAll(): Promise<PaginationResponse<TemplateDomainEntity>> {
    return this.service.findAll({});
  }

}
