import express from 'express';
import ProductsRouter from './routes/products.router';
import UserRouter from './routes/user.router';
import OrderRouter from './routes/order.router';
import LoginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', LoginRouter);

export default app;
