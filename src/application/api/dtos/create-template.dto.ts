import { IsString, IsInt, IsEnum, IsUUID, IsNumberString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { TemplateDomainEntity } from '@domain/entities/template-domain.entity';

enum GenderEnum { Male = 'Male', Female = 'Female' }

export class CreateTemplateDto implements TemplateDomainEntity {

  @ApiModelProperty()
  @IsUUID('4')
  id: string;

  @ApiModelProperty()
  @IsString()
  name: string;

  @ApiModelProperty()
  @IsString()
  middleName: string;

  @ApiModelProperty()
  @IsString()
  lastName: string;

  @ApiModelProperty()
  @IsNumberString()
  age: number;

  @ApiModelProperty({ enum: ['Male', 'Female'] })
  @IsEnum(GenderEnum)
  gender: string;

}
