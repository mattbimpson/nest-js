import {MigrationInterface, QueryRunner} from "typeorm";

export class initialData1604793650796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO item(name, description, count) values ('test', 'test item', 1)`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
