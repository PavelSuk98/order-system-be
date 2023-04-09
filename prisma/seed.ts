import { PrismaClient } from '@prisma/client';
import { UserRoleEnum } from '../src/domains/identity/domain/role.enum';
import { LogTypeEnum } from '../src/domains/logger/models/log-type.enum';
import { ProductCategoryTypeEnum } from '../src/domains/product-category/models/product-category-type.enum';

const prisma = new PrismaClient();

const seedRoles = async () => {
  await prisma.role.upsert({
    where: { id: UserRoleEnum.Admin },
    update: {},
    create: {
      id: UserRoleEnum.Admin,
      name: 'Admin',
      isActive: true,
    },
  });
  await prisma.role.upsert({
    where: { id: UserRoleEnum.Service },
    update: {},
    create: {
      id: UserRoleEnum.Service,
      name: 'Service',
      isActive: true,
    },
  });
  await prisma.role.upsert({
    where: { id: UserRoleEnum.Customer },
    update: {},
    create: {
      id: UserRoleEnum.Customer,
      name: 'Customer',
      isActive: true,
    },
  });
};

const seedUsers = async () => {
  await prisma.user.upsert({
    where: { id: 'd286f4f1-a38e-465f-81eb-5cddcac2be79' },
    update: {},
    create: {
      id: 'd286f4f1-a38e-465f-81eb-5cddcac2be79',
      firstName: 'Jan',
      lastName: 'Dostál',
      email: 'honza@dobracajka.cz',
      password: '$2a$10$k13JqPFi43ST1ILXKZJqqe1wGzTga79Fgps6iZfo1G/ffmGkf8GkC',
      roleId: '2d142769-a5c1-4a37-a151-aefe097e8934',
    },
  });

  await prisma.user.upsert({
    where: { id: 'beedecfd-64bb-4c1c-9e8c-76dbdba640b5' },
    update: {},
    create: {
      id: 'beedecfd-64bb-4c1c-9e8c-76dbdba640b5',
      firstName: 'Admin',
      lastName: 'System',
      email: 'admin@dobracajka.cz',
      password: '$2a$10$k13JqPFi43ST1ILXKZJqqe1wGzTga79Fgps6iZfo1G/ffmGkf8GkC',
      roleId: '2d142769-a5c1-4a37-a151-aefe097e8934',
    },
  });
};

const seedProductCategoryType = async () => {
  await prisma.productCategoryType.upsert({
    where: { id: ProductCategoryTypeEnum.Food },
    update: {},
    create: {
      id: ProductCategoryTypeEnum.Food,
      name: 'Food',
    },
  });
  await prisma.productCategoryType.upsert({
    where: { id: ProductCategoryTypeEnum.Hookah },
    update: {},
    create: {
      id: ProductCategoryTypeEnum.Hookah,
      name: 'Hookah',
    },
  });
  await prisma.productCategoryType.upsert({
    where: { id: ProductCategoryTypeEnum.Tea },
    update: {},
    create: {
      id: ProductCategoryTypeEnum.Tea,
      name: 'Tea',
    },
  });
};

const seedLogType = async () => {
  await prisma.logType.upsert({
    where: { id: LogTypeEnum.Create },
    update: {},
    create: {
      id: LogTypeEnum.Create,
      name: 'Create',
    },
  });
  await prisma.logType.upsert({
    where: { id: LogTypeEnum.Delete },
    update: {},
    create: {
      id: LogTypeEnum.Delete,
      name: 'Delete',
    },
  });
  await prisma.logType.upsert({
    where: { id: LogTypeEnum.Update },
    update: {},
    create: {
      id: LogTypeEnum.Update,
      name: 'Update',
    },
  });
};
async function main() {
  await seedRoles();
  await seedUsers();
  await seedProductCategoryType();
  await seedLogType();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
