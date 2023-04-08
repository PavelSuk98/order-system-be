import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddLogTypes1649781299857 implements MigrationInterface {
  name = 'AddLogTypes1649781299857';

  public async up(queryRunner: QueryRunner) {
    await queryRunner.query(
      `INSERT INTO "log_type_entity" (id, name) VALUES('${LogTypeEnum.Create}', 'Create')`,
    );

    await queryRunner.query(
      `INSERT INTO "log_type_entity" (id, name) VALUES('${LogTypeEnum.Update}', 'Update')`,
    );

    await queryRunner.query(
      `INSERT INTO "log_type_entity" (id, name) VALUES('${LogTypeEnum.Delete}', 'Delete')`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner) {}
}
