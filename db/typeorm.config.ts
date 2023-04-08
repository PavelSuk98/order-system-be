import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import InitialSeed1649781299856 from './migrations/1649781299856-initial-seed';
import AddLogTypes1649781299857 from './migrations/1649781299857-add-log-types';
import AddProductCategoryTypes1649781299857 from './migrations/1649781299857-add-product-category-types';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      migrations: [
        InitialSeed1649781299856,
        AddLogTypes1649781299857,
        AddProductCategoryTypes1649781299857,
      ],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: true,
      autoLoadEntities: true,
      migrationsRun: false,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  migrations: [
    InitialSeed1649781299856,
    AddLogTypes1649781299857,
    AddProductCategoryTypes1649781299857,
  ],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: true,
  autoLoadEntities: true,
  migrationsRun: true,
  logging: true,
};
