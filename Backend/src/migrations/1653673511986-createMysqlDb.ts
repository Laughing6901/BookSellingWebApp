import {MigrationInterface, QueryRunner} from "typeorm";

export class createMysqlDb1653673511986 implements MigrationInterface {
    name = 'createMysqlDb1653673511986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Users\` (\`UserId\` int NOT NULL AUTO_INCREMENT, \`FirstName\` varchar(20) NOT NULL, \`LastName\` varchar(20) NOT NULL, \`Avatar\` blob NOT NULL, \`Password\` varchar(20) NOT NULL, \`Email\` varchar(255) NOT NULL, \`Gender\` varchar(6) NOT NULL, \`DateOfBirth\` date NOT NULL, \`Address\` varchar(255) NOT NULL, \`PhoneNumber\` varchar(255) NOT NULL, \`SocketId\` varchar(255) NOT NULL, PRIMARY KEY (\`UserId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`GroupMember\` (\`GroupMemberId\` int NOT NULL AUTO_INCREMENT, \`JoinDate\` datetime NOT NULL, \`LeftDate\` datetime NOT NULL, \`Role\` enum ('Admin', 'Member') NOT NULL DEFAULT 'Member', \`groupChatGroupId\` int NULL, \`userUserId\` int NULL, PRIMARY KEY (\`GroupMemberId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`GroupChat\` (\`GroupId\` int NOT NULL, \`GroupName\` varchar(255) NOT NULL, \`Avatar\` blob NOT NULL, PRIMARY KEY (\`GroupId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` ADD CONSTRAINT \`FK_53a2ec0db9ecbab38df8a739660\` FOREIGN KEY (\`groupChatGroupId\`) REFERENCES \`GroupChat\`(\`GroupId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` ADD CONSTRAINT \`FK_6d1f58274225e6df1feb4f94b82\` FOREIGN KEY (\`userUserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`GroupMember\` DROP FOREIGN KEY \`FK_6d1f58274225e6df1feb4f94b82\``);
        await queryRunner.query(`ALTER TABLE \`GroupMember\` DROP FOREIGN KEY \`FK_53a2ec0db9ecbab38df8a739660\``);
        await queryRunner.query(`DROP TABLE \`GroupChat\``);
        await queryRunner.query(`DROP TABLE \`GroupMember\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }

}
