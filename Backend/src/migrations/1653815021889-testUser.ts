import {MigrationInterface, QueryRunner} from "typeorm";

export class testUser1653815021889 implements MigrationInterface {
    name = 'testUser1653815021889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`Gender\``);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`Gender\` enum ('male', 'female', 'other') NOT NULL DEFAULT 'male'`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`DateOfBirth\` \`DateOfBirth\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`Address\` \`Address\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`PhoneNumber\` \`PhoneNumber\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`SocketId\` \`SocketId\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`SocketId\` \`SocketId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`PhoneNumber\` \`PhoneNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`Address\` \`Address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`DateOfBirth\` \`DateOfBirth\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`Gender\``);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`Gender\` varchar(6) NOT NULL`);
    }

}
