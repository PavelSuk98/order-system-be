import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

export default class InitialSeed1649781299856 implements MigrationInterface {
  name = 'InitialSeed1649781299856';

  public async up(queryRunner: QueryRunner) {
    await queryRunner.query(
      `INSERT INTO "Role" (id, name, isActive) VALUES('2d142769-a5c1-4a37-a151-aefe097e8934', 'Admin', true)`,
    );

    await queryRunner.query(
      `INSERT INTO "User" (id, "userName", email, password, "roleId", "createdDate", "createdBy", "updatedDate", "updatedBy") VALUES('beedecfd-64bb-4c1c-9e8c-76dbdba640b5', 'System Admin', 'admin@dobracajka.cz', '$2a$10$k13JqPFi43ST1ILXKZJqqe1wGzTga79Fgps6iZfo1G/ffmGkf8GkC', '2d142769-a5c1-4a37-a151-aefe097e8934', NOW(), 'System', NOW(), 'System')`,
    );

    await queryRunner.query(
      `INSERT INTO "User" (id, "userName", email, password, "roleId", "createdDate", "createdBy", "updatedDate", "updatedBy") VALUES('d286f4f1-a38e-465f-81eb-5cddcac2be79', 'Honza', 'honza@dobracajka.cz', '$2a$10$k13JqPFi43ST1ILXKZJqqe1wGzTga79Fgps6iZfo1G/ffmGkf8GkC', '2d142769-a5c1-4a37-a151-aefe097e8934', NOW(), 'System', NOW(), 'System')`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner) {}
}
