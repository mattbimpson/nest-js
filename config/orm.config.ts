import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, '..', 'src', '**', '*.entity.{ts,js}')],
  synchronize: false,
  migrationsRun: false,
  migrations: [
    join(__dirname, '..', 'src', 'database', 'migrations', '*.{ts,js}'),
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = config;
