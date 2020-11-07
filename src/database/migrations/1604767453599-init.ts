import {MigrationInterface, QueryRunner} from "typeorm";

export class init1604767453599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL default now(), "description" character varying NOT NULL, "name" character varying NOT NULL)`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
