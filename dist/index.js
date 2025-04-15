// import express from 'express';
// import userRoutes from './src/routes/user.router';
// import eventRoutes from './src/routes/event.routes';
// import ticketRoutes from './src/routes/ticket.routes'
// import { errorHandler } from './src/middlewares/error.middleware';
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(errorHandler);
// app.use('/tickets', ticketRoutes);
// app.use('/events', eventRoutes);
// app.use(express.json());
// app.use('/users', userRoutes);
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
import express from 'express';
import userRoutes from './routes/user.router';
import eventRoutes from './routes/event.routes';
import ticketRoutes from './routes/ticket.routes';
import { errorHandler } from './middlewares/error.middleware';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware para parsear o corpo da requisição em JSON
app.use(express.json());
// Definição das rotas
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/tickets', ticketRoutes);
// Middleware de erro (deve ser o último middleware, após todas as rotas)
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
