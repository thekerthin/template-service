import { Module } from '@nestjs/common';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { TemplateController } from './controllers/template.controller';
import { TemplateService } from './services/template.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

const morganProvider = {
  provide: APP_INTERCEPTOR,
  useClass: MorganInterceptor('combined'),
};

@Module({
  imports: [
    MorganModule.forRoot(),
  ],
  controllers: [TemplateController],
  providers: [
    TemplateService,
    morganProvider,
  ],
})
export class ApiModule { }
