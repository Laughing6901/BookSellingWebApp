import {MigrationInterface, QueryRunner} from "typeorm";

export class updatedb1654894821591 implements MigrationInterface {
    name = 'updatedb1654894821591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`GroupMember\` ADD \`Name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` CHANGE \`JoinDate\` \`JoinDate\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` CHANGE \`LeftDate\` \`LeftDate\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` DROP FOREIGN KEY \`FK_53a2ec0db9ecbab38df8a739660\``);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` DROP COLUMN \`GroupId\``);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` ADD \`GroupId\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` CHANGE \`Avatar\` \`Avatar\` blob NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` ADD CONSTRAINT \`FK_53a2ec0db9ecbab38df8a739660\` FOREIGN KEY (\`groupChatGroupId\`) REFERENCES \`GroupChat\`(\`GroupId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`GroupMember\` DROP FOREIGN KEY \`FK_53a2ec0db9ecbab38df8a739660\``);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` CHANGE \`Avatar\` \`Avatar\` blob NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` DROP COLUMN \`GroupId\``);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` ADD \`GroupId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupChat\` ADD PRIMARY KEY (\`GroupId\`)`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` ADD CONSTRAINT \`FK_53a2ec0db9ecbab38df8a739660\` FOREIGN KEY (\`groupChatGroupId\`) REFERENCES \`GroupChat\`(\`GroupId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` CHANGE \`LeftDate\` \`LeftDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` CHANGE \`JoinDate\` \`JoinDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` DROP COLUMN \`Name\``);
    }

}
