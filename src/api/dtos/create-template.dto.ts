import { IsString, IsInt, IsEnum, IsUUID, IsNumberString } from 'class-validator';
import { TemplateDomainEntity } from '../../domain/entities/template-domain.entity';

enum GenderEnum { Male = 'male', Female = 'female' }

export class CreateTemplateDto implements TemplateDomainEntity {

  @IsUUID('4')
  id: string;

  @IsString()
  name: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsNumberString()
  age: number;

  @IsEnum(GenderEnum)
  gender: string;

}
