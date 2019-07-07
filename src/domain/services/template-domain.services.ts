import { Injectable } from '@nestjs/common';
import { TemplateDomainEntity } from '../entities/template-domain.entity';
import { EmitEvent } from '../../shared/decorator';

@Injectable()
export class TemplateDomainService {

  // TODO: evaluate if we can emit an event with an annotation - check this whether works ;)
  create() {
    // ... business rule
    // ... emit event
    // ... response (it depends of the logic) return;
  }

  @EmitEvent({})
  findAll(data: any): Promise<TemplateDomainEntity[]> {
    return Promise.resolve<TemplateDomainEntity[]>([]);
  }

}
