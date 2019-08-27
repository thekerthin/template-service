import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { getPrototypes } from '@kerthin/utils';

const controllers = getPrototypes(`${__dirname}/controllers/*{.ts,.js}`);
const services = getPrototypes(`${__dirname}/services/*{.ts,.js}`);

const morganProvider = {
  provide: APP_INTERCEPTOR,
  useClass: MorganInterceptor('combined'),
};

@Module({
  imports: [
    MorganModule.forRoot(),
  ],
  controllers: [
    ...controllers,
  ],
  providers: [
    ...services,
    morganProvider,
  ],
})
export class ApiModule { }
