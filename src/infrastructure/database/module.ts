import { Module, Global, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { getPrototypes } from '@kerthin/utils';

const repositories = getPrototypes(`${__dirname}/repositories/*{.ts,.js}`)

const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});

const providerRepositories = TypeOrmModule.forFeature([
  ...repositories,
]);

@Global()
@Module({
  imports: [
    providerRepositories,
    dbConfig,
  ],
  providers: [
    ...repositories,
  ],
  exports: [
    providerRepositories,
  ],
})
export class DBModule implements OnModuleInit {

  constructor(private readonly connection: Connection) { }

  async onModuleInit() {
    await this.connection.runMigrations();
  }

}
