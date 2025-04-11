import express from 'express';
import userRoutes from './src/routes/user.router';
import eventRoutes from './src/routes/event.routes';
import ticketRoutes from './src/routes/ticket.routes'
import { errorHandler } from './src/middlewares/error.middleware';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(errorHandler);
app.use('/tickets', ticketRoutes);
app.use('/events', eventRoutes);
app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
