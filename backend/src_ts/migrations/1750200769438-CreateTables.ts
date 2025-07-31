import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1750200769438 implements MigrationInterface {
    name = 'CreateTables1750200769438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "conversation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isGroup" boolean NOT NULL, "name" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_864528ec4274360a40f66c29845" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), "conversationId" uuid NOT NULL, "senderId" uuid NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "photoUrl" character varying, "bio" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversation_participants_user" ("conversationId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_25e9241137cdb0f2336d267cc99" PRIMARY KEY ("conversationId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4928ef292e3fb48783034b82f7" ON "conversation_participants_user" ("conversationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5d93fb1843f96fbdefea37dae8" ON "conversation_participants_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "message_seen_by_user" ("messageId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_5545e39eb43745eed713928a904" PRIMARY KEY ("messageId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c2b3de805019bb020f0440e018" ON "message_seen_by_user" ("messageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d72d46b46ab9df6e18671327dd" ON "message_seen_by_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_7cf4a4df1f2627f72bf6231635f" FOREIGN KEY ("conversationId") REFERENCES "conversation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "conversation_participants_user" ADD CONSTRAINT "FK_4928ef292e3fb48783034b82f7a" FOREIGN KEY ("conversationId") REFERENCES "conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "conversation_participants_user" ADD CONSTRAINT "FK_5d93fb1843f96fbdefea37dae86" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message_seen_by_user" ADD CONSTRAINT "FK_c2b3de805019bb020f0440e018b" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "message_seen_by_user" ADD CONSTRAINT "FK_d72d46b46ab9df6e18671327dd2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_seen_by_user" DROP CONSTRAINT "FK_d72d46b46ab9df6e18671327dd2"`);
        await queryRunner.query(`ALTER TABLE "message_seen_by_user" DROP CONSTRAINT "FK_c2b3de805019bb020f0440e018b"`);
        await queryRunner.query(`ALTER TABLE "conversation_participants_user" DROP CONSTRAINT "FK_5d93fb1843f96fbdefea37dae86"`);
        await queryRunner.query(`ALTER TABLE "conversation_participants_user" DROP CONSTRAINT "FK_4928ef292e3fb48783034b82f7a"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_7cf4a4df1f2627f72bf6231635f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d72d46b46ab9df6e18671327dd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c2b3de805019bb020f0440e018"`);
        await queryRunner.query(`DROP TABLE "message_seen_by_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5d93fb1843f96fbdefea37dae8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4928ef292e3fb48783034b82f7"`);
        await queryRunner.query(`DROP TABLE "conversation_participants_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "conversation"`);
    }

}
