import express from 'express';
import ProductsRouter from './routes/products.router';
import UserRouter from './routes/user.router';
import OrderRouter from './routes/order.router';
import LoginRouter from './routes/login.router';
import httpErrorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', LoginRouter);

app.use(httpErrorMiddleware);

export default app;
