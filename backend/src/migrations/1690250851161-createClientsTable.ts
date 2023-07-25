import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientsTable1690250851161 implements MigrationInterface {
    name = 'CreateClientsTable1690250851161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "number" character varying`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "number" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "number" integer`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "number" integer`);
    }

}
