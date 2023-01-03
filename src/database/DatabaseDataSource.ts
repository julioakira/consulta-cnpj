import 'reflect-metadata';
import { DataSource } from 'typeorm';

const DatabaseDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    __dirname + '/../**/*.entity.{js,ts}'
  ],
  migrations: [
    __dirname + '/../**/*.migrations.{js,ts}'
  ],
  subscribers: [
    __dirname + '/../**/*.subscribers.{js,ts}'
  ],
});

export default DatabaseDataSource;
