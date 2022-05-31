import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1653813898428 implements MigrationInterface {
    name = 'updateUser1653813898428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`Password\``);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`Password\` varchar(60) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`Password\``);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`Password\` varchar(20) NOT NULL`);
    }

}
