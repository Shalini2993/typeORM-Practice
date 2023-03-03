import express, { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Card } from './entity/Card';
import {Post } from './entity/Post'
import { Content } from './entity/Content'
import { Photo } from './entity/Photo'

const app = express();
const port = 4011;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Shalini29#',
  database: 'mydatabase',
  synchronize: true,
  entities: [Photo],
  logging: true
})
AppDataSource.initialize()
  .then(() => {
    console.log('DB connected');
  })
  .catch((e) => {
    console.log(e);
  });

app.get('/test', (req: Request, resp: Response) => {
  resp.json({
    data: 'test done',
  });
});

app.listen(port, () => {
  console.log('Listening', +port);
});
