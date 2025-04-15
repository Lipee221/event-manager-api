
import express from 'express';
import userRoutes from './routes/user.router';
import eventRoutes from './routes/event.routes';
import ticketRoutes from './routes/ticket.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); 


app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/tickets', ticketRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
