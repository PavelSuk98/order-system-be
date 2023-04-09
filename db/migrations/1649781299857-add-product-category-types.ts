// import { LogTypeEnum } from 'src/domains/logger/models/log-type.enum';
// import { ProductCategoryTypeEnum } from 'src/domains/product-category/models/product-category-type.enum';
// import { MigrationInterface, QueryRunner } from 'typeorm';

// export default class AddProductCategoryTypes1649781299857
//   implements MigrationInterface
// {
//   name = 'AddProductCategoryTypes1649781299857';

//   public async up(queryRunner: QueryRunner) {
//     await queryRunner.query(
//       `INSERT INTO "product_category_type_entity" (id, name) VALUES('${ProductCategoryTypeEnum.Food}', 'Food')`,
//     );

//     await queryRunner.query(
//       `INSERT INTO "product_category_type_entity" (id, name) VALUES('${ProductCategoryTypeEnum.Tea}', 'Tea')`,
//     );

//     await queryRunner.query(
//       `INSERT INTO "product_category_type_entity" (id, name) VALUES('${ProductCategoryTypeEnum.Hookah}', 'Hookah')`,
//     );
//   }

//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   public async down(queryRunner: QueryRunner) {}
// }
