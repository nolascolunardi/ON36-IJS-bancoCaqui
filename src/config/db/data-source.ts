import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Clientes1725982037728 } from './migrations/1725982037728-Clientes';
import { Gerentes1726109697703 } from './migrations/1726109697703-Gerentes';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: [Clientes1725982037728, Gerentes1726109697703],
});

export default AppDataSource;
