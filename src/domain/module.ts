import { Module, Global } from '@nestjs/common';

import { DBModule } from '../database/module';
import { TemplateDomainService } from './services/template-domain.services';

@Global()
@Module({
  imports: [DBModule],
  providers: [TemplateDomainService],
  exports: [TemplateDomainService],
})
export class DomainModule {}
