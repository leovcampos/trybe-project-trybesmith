import express from 'express';
import ProductsRouter from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/', ProductsRouter);

export default app;
