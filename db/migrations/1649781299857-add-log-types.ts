import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddLogTypes1649781299857 implements MigrationInterface {
  name = 'AddLogTypes1649781299857';

  public async up(queryRunner: QueryRunner) {
    await queryRunner.query(
      `INSERT INTO "Role" (id, name, isActive) VALUES('2d142769-a5c1-4a37-a151-aefe097e8934', 'Admin', true)`,
    );

    await queryRunner.query(
      `INSERT INTO "Role" (id, name, isActive) VALUES('${LogTypeEnum.Create}', 'Admin', true)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner) {}
}
