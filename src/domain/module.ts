import { Module, Global } from '@nestjs/common';
import { TemplateDomainService } from './services/template-domain.services';

@Global()
@Module({
  providers: [
    TemplateDomainService
  ],
  exports: [
    TemplateDomainService
  ]
})
export class DomainModule { }
