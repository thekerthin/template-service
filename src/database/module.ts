import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TemplateRepository } from './repositories/template.repository';

const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  synchronize: true,
});

const repositories = TypeOrmModule.forFeature([
  TemplateRepository
]);

@Global()
@Module({
  imports: [
    repositories,
    dbConfig,
  ],
  providers: [
    TemplateRepository
  ],
  exports: [
    repositories
  ]
})
export class DBModule { }
