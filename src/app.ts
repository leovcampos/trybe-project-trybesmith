import express from 'express';
import ProductsRouter from './routes/products.router';
import UserRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UserRouter);

export default app;
