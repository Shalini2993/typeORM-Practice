import express, { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Card } from './entity/Card';

const app = express();
const port = 4011;

new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Shalini29#',
  database: 'myDatabase',
  synchronize: true,
  entities: ['./entity/*.ts'],
  logging: true
})
  .initialize()
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
