import { EntityRepository, Repository } from 'typeorm';
import { Template } from '../entities/template.entity';

@EntityRepository(Template)
export default class TemplateRepository extends Repository<Template> { }
