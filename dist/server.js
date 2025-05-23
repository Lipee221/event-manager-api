import express from 'express';
import userRoutes from './routes/user.router';
const app = express();
app.use(express.json());
app.use(userRoutes);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
