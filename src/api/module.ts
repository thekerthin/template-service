import { Module } from '@nestjs/common';
import { TemplateController } from './controllers/template.controller';
import { TemplateService } from './services/template.service';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class ApiModule { }
