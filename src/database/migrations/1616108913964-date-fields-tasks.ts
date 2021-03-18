import {MigrationInterface, QueryRunner} from "typeorm";

export class dateFieldsTasks1616108913964 implements MigrationInterface {
    name = 'dateFieldsTasks1616108913964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "task" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "createdAt"`);
    }

}
