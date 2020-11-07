import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

// todo - these should be using process.env values 
const config: ConnectionOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'my_database',
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
