import express from 'express';
import userRoutes from './src/routes/user.router';
import eventRoutes from './src/routes/event.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/events', eventRoutes);
app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
