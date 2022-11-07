import express from 'express';
import ProductsRouter from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

export default app;
