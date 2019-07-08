import { EntityRepository, Repository } from 'typeorm';
import { Template } from '../entities/template.entity';

@EntityRepository(Template)
export class TemplateRepository extends Repository<Template> { }
