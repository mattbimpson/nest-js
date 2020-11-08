import {MigrationInterface, QueryRunner} from "typeorm";

export class init1604767453599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(
            `CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL default now(), "description" character varying NOT NULL, "name" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_295c0898cceea20ac8ee103d98d" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
