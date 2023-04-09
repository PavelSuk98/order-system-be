import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { id: '2d142769-a5c1-4a37-a151-aefe097e8934' },
    update: {},
    create: {
      id: '2d142769-a5c1-4a37-a151-aefe097e8934',
      name: 'Admin',
      isActive: true,
    },
  });
  await prisma.role.upsert({
    where: { id: '500861a9-6328-44dd-aa5f-67667b3c99bf' },
    update: {},
    create: {
      id: '500861a9-6328-44dd-aa5f-67667b3c99bf',
      name: 'Service',
      isActive: true,
    },
  });
  await prisma.role.upsert({
    where: { id: '983cf827-ef67-4eab-b247-e56973d8cc16' },
    update: {},
    create: {
      id: '983cf827-ef67-4eab-b247-e56973d8cc16',
      name: 'Customer',
      isActive: true,
    },
  });
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
