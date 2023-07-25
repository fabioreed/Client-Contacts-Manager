import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientsTable1690249379207 implements MigrationInterface {
    name = 'CreateClientsTable1690249379207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "phone" TO "number"`);
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "phone" TO "number"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "number" integer`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "number" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "number" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "number" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "number" TO "phone"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "number" TO "phone"`);
    }

}
