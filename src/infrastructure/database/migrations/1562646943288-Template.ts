import { MigrationInterface, QueryRunner } from 'typeorm';

export class Template1562646943288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // tslint:disable
        await queryRunner.query(`CREATE TABLE "templates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(500) NOT NULL, "middleName" character varying(500) NOT NULL, "lastName" character varying(500) NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_515948649ce0bbbe391de702ae5" PRIMARY KEY ("id"))`);
        // tslint:enable
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE "templates"');
    }

}
