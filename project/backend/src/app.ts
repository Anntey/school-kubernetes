import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import todosRouter from './routes/todos';

const app = express();
app.set('trust proxy', 'uniquelocal');

app.use(cors());
app.use(express.json());
app.use(morgan('short'));
app.use('/api/static', express.static(`${__dirname}/public`));
app.use('/api/todos', todosRouter);

export default app;