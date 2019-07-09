import { Module, Global, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { TemplateRepository } from './repositories/template.repository';

const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});

const repositories = TypeOrmModule.forFeature([
  TemplateRepository,
]);

@Global()
@Module({
  imports: [repositories, dbConfig],
  providers: [TemplateRepository],
  exports: [repositories],
})
export class DBModule implements OnModuleInit {

  constructor(private readonly connection: Connection) { }

  async onModuleInit() {
    await this.connection.runMigrations();
  }

}
