import express, { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Card } from './entity/Card';
import {Post } from './entity/Post'
import { Content } from './entity/Content'
import { Photo } from './entity/Photo'
import { Question } from './entity/Question';
import { CategoryEntity } from './ent/Category'
import { PersonEntity } from './ent/Person';
import { router } from './routes/routes'

const app = express();
const port = 4011;

app.use('/', router)

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Shalini29#',
  database: 'mydatabase1',
  synchronize: true,
  entities: [User],
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

export {
  AppDataSource
}
