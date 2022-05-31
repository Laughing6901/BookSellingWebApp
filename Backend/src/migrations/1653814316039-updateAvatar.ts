import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAvatar1653814316039 implements MigrationInterface {
    name = 'updateAvatar1653814316039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`Avatar\` \`Avatar\` blob NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`Avatar\` \`Avatar\` blob NOT NULL`);
    }

}
